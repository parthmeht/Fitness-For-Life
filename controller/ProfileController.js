var express = require('express');
var querystring = require('querystring');    

var router = express.Router();
var userDB = require('../utility/UserDB');
var itemDb = require('../utility/ItemDB');

var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('../model/User');
var UserProfile = require('../model/UserProfile');

const { check,validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: false
}));

router.get('/registration_page', function(req,res){
    var errorMessage = req.session.errorMessage;
    req.session.errorMessage = null;
    if (req.session.theUser) {
        console.log('User already logged in');
        res.redirect('/');
    }else{
        var data = {
            title: 'Register',
            path: req.url,
            errorMessage: errorMessage
        };
        res.render('register', {
            data: data
        });
    }
});

router.post('/register', [
    check('inputEmail').isEmail().normalizeEmail().withMessage('Improper Email Id'),
    check('inputPassword').not().isEmpty().trim().escape().isLength({ min: 5 }).withMessage('Improper Password'),
    check('inputFirstName').isLength({min : 3}).withMessage('First Name must be more than 3 characters'),
    check('inputFirstName').isAlpha().withMessage('First Name should be only alphabets'),
    check('inputLastName').isLength(({min : 3})).withMessage('Last Name must be more than 3 characters'),
    check('inputLastName').isAlpha().withMessage('Last Name should be only alphabets'),
    check('inputConfirmPassword').not().isEmpty().trim().escape().isLength({ min: 5 }).withMessage('Improper Confirm Password'),
    check('inputConfirmPassword', 'Password Confirmation field must have the same value as the password field').exists().custom((value, { req }) => value === req.body.inputPassword),
    check('inputEmail', 'Email Id already registered').exists().custom( async (value, { req }) => {
        var user = await userDB.getUser(value);
        if(user===null)
            return true;
        else
            return false;
    })
], async function (req, res) {
    const errors = validationResult(req);
    if (errors.array().length>0){
        //res.render('register',{error:errors.array()});
        req.session.errorMessage = errors.array();            
        res.redirect('/registration_page');
    }else{
        if (req.session.theUser) {
            console.log('User already logged in');
            res.redirect('/');
        } else {
            var userObject = {
                userId: req.body.inputEmail,
                password: req.body.inputPassword,
                firstName: req.body.inputFirstName,
                lastName: req.body.inputLastName,
                email: req.body.inputEmail,
                address1: req.body.inputAddress1,
                address2: req.body.inputAddress2,
                city: req.body.inputCity,
                state: req.body.inputState,
                zipCode: req.body.inputZip, 
                country: req.body.inputCountry
            };
            var userModelObject = new User(userObject);
            userModelObject.password = userModelObject.generateHash(userObject.password);
            var user = await userDB.createNewUser(userModelObject);
            if(user != null){
                req.session.theUser = user;
                req.session.userProfile = await userDB.getUserProfile(user.userId);
                console.log('seesion userprofile', req.session.userProfile);
                res.redirect('/myItems');
            }
        }
    }
});

router.get('/signIn', function(req,res){
    var errorMessage = req.session.errorMessage;
    req.session.errorMessage = null;
    if (req.session.theUser) {
        console.log('User already logged in');
        res.redirect('/');
    }else{
        var data = {
            title: 'Sign In',
            path: req.url,
            errorMessage: errorMessage
        };
        res.render('login', {
            data: data
        });
    }
});

router.post('/login', [
    check('inputEmail').isEmail().normalizeEmail(),
    check('inputPassword').not().isEmpty().trim().escape().isLength({ min: 5 })
], async function (req, res) {
    if (req.session.theUser) {
        console.log('User already logged in');
        res.redirect('/');
    } else {
        var userEmailId = req.body.inputEmail;
        var userPassword = req.body.inputPassword;
        var user = await userDB.getUser(userEmailId);
        console.log(user);
        if (user!=null && user.validPassword(userPassword)) {
            // password matched. proceed forward
            req.session.theUser = user;
            req.session.userProfile = await userDB.getUserProfile(user.userId);
            console.log('seesion userprofile', req.session.userProfile);
            res.redirect('/myItems');
        } else {
            //password did not match
            var errorMessage = "Either username or password are incorrect. Please try again.";
            req.session.errorMessage = errorMessage;            
            res.redirect('/signIn');
        }
        
    }
});

router.post('/logout', function (req, res) {
    if (req.session.theUser) {
        req.session.theUser = null;
        res.redirect('/');
    }
});

router.get('/categories/item/saveIt/:itemCode', [
    check('itemCode').isNumeric().withMessage('Please enter proper format')
], async function (req, res) {
    const errors = validationResult(req);
    if(errors.array().length>0){
        req.session.errorMessage = errors.array();
        res.redirect('/error');
    }else{
        var index = -1;
        if (req.session.theUser) {
            index = getSelectedItem(req.session.userProfile.userItemList, req.params.itemCode);
            if (index == -2) {
                var itemData = await itemDb.getItem(req.params.itemCode);
                var userItem = {
                    itemCode: itemData.itemCode, 
                    itemName: itemData.itemName, 
                    catalogCategory: itemData.catalogCategory, 
                    rating: 0, 
                    madeIt: false
                };
                var userProfile = await userDB.addUserItem(req.session.theUser.userId,userItem);
                req.session.userProfile = userProfile;
                console.log('userProfile - save : ', req.session.userProfile.userItemList);
                res.redirect('/myItems');
            } else {
                console.log('Item already present');
                res.redirect('/myItems');
            }
        } else {
            res.redirect('/categories/item/' + req.params.itemCode);
        }
    }
});

router.post('/update/feedback/:itemCode', [
    check('itemCode').isNumeric().withMessage('Please enter proper format'),
    check('itemList').isNumeric().withMessage('Please enter proper format'),
    check('feedbackHidden').isAlpha().withMessage('Invalid feedback parameter')
], async function (req, res) {
    const errors = validationResult(req);
    if(errors.array().length>0 && errors.array()[0].location==="params"){
        req.session.errorMessage = errors.array();
        res.redirect('/error');
    }else if(errors.array().length>0){
        req.session.errorMessage = errors.array();
        res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
    }else{
        var index = -1;
        var itemCode = -1;
        if(req.body.itemCode == req.body.itemList){
            itemCode = req.body.itemCode;
            if (req.session.theUser) {
                index = getSelectedItem(req.session.userProfile.userItemList, itemCode);
                if (index == -2) {
                    console.log('Item not present in the users profile');
                    res.redirect('/myItems');
                } else {
                    if (req.body.feedbackHidden == 'rating') {
                        console.log(req.body.rating);
                        var userProfile = await userDB.addItemRating(itemCode, req.session.theUser.userId, parseInt(req.body.rating, 10));
                        req.session.userProfile = userProfile;
                        res.redirect('/myItems');
                    } else if (req.body.feedbackHidden == 'madeIt') {
                        console.log(req.body.madeItRadio);
                        if(req.body.madeItRadio!=undefined){
                            var userProfile = await userDB.addMadeIt(itemCode, req.session.theUser.userId, JSON.parse(req.body.madeItRadio));
                            req.session.userProfile = userProfile;
                            res.redirect('/myItems');
                        }else{
                            res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
                        }
                    } else {
                        console.log('Incorrect paramter');
                        res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
                    }
                }
            } else {
                res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
            }
        }else{
            res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
        }
    }
});

router.get('/myItems/delete/:itemCode', [
    check('itemCode').isNumeric().withMessage('Please enter proper format')
], async function (req, res) {
    const errors = validationResult(req);
    if(errors.array().length>0){
        req.session.errorMessage = errors.array();
        res.redirect('/error');
    }else{
        var index = -1;
        if (req.session.theUser) {
            index = getSelectedItem(req.session.userProfile.userItemList, req.params.itemCode);
            if (index == -2) {
                console.log('Item not present in the users profile');
                res.redirect('/myItems');
            } else {
                var userProfile = await userDB.deleteUserItem(req.params.itemCode,req.session.theUser.userId);
                req.session.userProfile = userProfile;
                res.redirect('/myItems');
            }
        } else {
            res.redirect('/');
        }
    }
});

router.get('/user/newPlan', function(req, res){
    if (req.session.theUser) {
        req.session.userProfile.userItemList = [];
        res.redirect('/myItems');
    } else{
        res.redirect('/');
    }
});

var getSelectedItem = function (itemList, itemCode) {
    for (var index = 0; index < itemList.length; index++) {
        if (itemList[index].itemCode == parseInt(itemCode, 10)) {
            return index;
        }
    }
    return -2;
};

module.exports.getSelectedItem = getSelectedItem;

module.exports.router = router;