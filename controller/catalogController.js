var express = require('express');
var router = express.Router();
var itemDb = require('../utility/ItemDB');
var bodyParser = require('body-parser');

var Contact = require('../model/Contact');
var ProfileController = require('./ProfileController');

const { check, param,validationResult } = require('express-validator/check')

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: false
}));

var user = null;
var userProfile = null;

router.use(function getSession(req, res, next) {
    if (req.session.theUser) {
        user = req.session.theUser;
        userProfile = req.session.userProfile;
    } else {
        user = null;
        userProfile = null;
    }
    next();
});

/* GET home page. */
router.all('/', function (req, res) {
    var data = {
        title: 'Index',
        path: req.url,
        user: user
    };
    res.render('index', {
        data: data
    });
});

router.get('/categories', async  function (req, res) {
    var itemData = await itemDb.getItems();
    var categories = await itemDb.getCategories();
    var data = {
        title: 'Categories',
        path: req.url,
        categories: categories,
        items: itemData,
        user: user
    };
    res.render('categories', {
        data: data
    });
});

router.get('/contact', function (req, res) {
    var errorMessage = req.session.errorMessage;
    var successMessage = req.session.successMessage;
    req.session.errorMessage = null;
    req.session.successMessage = null;
    var data = {
        title: 'Contact',
        path: req.url,
        user: user,
        errorMessage: errorMessage,
        successMessage: successMessage
    };
    res.render('contact', {
        data: data
    });
});

router.post('/contact_us', [
    check('email').isEmail().normalizeEmail().withMessage('Improper Email Id'),
    check('firstname').isLength({min : 3}).withMessage('First Name must be more than 3 characters'),
    check('firstname').isAlpha().withMessage('First Name should be only alphabets'),
    check('lastname').isLength(({min : 3})).withMessage('Last Name must be more than 3 characters'),
    check('lastname').isAlpha().withMessage('Last Name should be only alphabets'),
    check('message').not().isEmpty().trim().escape().withMessage('Improper Message')
], async function (req, res) {
    const errors = validationResult(req);
    if (errors.array().length>0){
        req.session.errorMessage = errors.array();            
        res.redirect('/contact');
    }else{
        var details = new Contact({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            message: req.body.message
        });
        var response = await itemDb.saveContactDetails(details);
        if(response){
            req.session.successMessage = "Your contact entry has been saved !!!";
            res.redirect('/contact');
        }else{
            res.redirect('/error');
        }
    }
});

router.get('/about', function (req, res) {
    var data = {
        title: 'About',
        path: req.url,
        user: user
    };
    res.render('about', {
        data: data
    });
});

router.get('/categories/item/:itemCode', 
    param('itemCode').isNumeric().withMessage('Please enter proper format')
, async function (req, res, next) {
    const errors = validationResult(req);
    if(errors.array().length>0){
        req.session.errorMessage = errors.array();
        res.redirect('/error');
    }else{
        var exist = await itemDb.isExist(req.params.itemCode);
        if (exist) {
            var itemData = await itemDb.getItem(req.params.itemCode);
            console.log(itemData);
            var index = -1;
            if(req.session.userProfile){
                index = ProfileController.getSelectedItem(req.session.userProfile.userItemList, req.params.itemCode);
            }
            var data = {
                title: 'Item',
                path: req.url,
                item: itemData,
                user: user,
                userProfile: userProfile,
                index: index
            };
            res.render('item', {
                data: data
            });
        } else {
            res.redirect('/categories');
        }
    }
});

router.get('/myItems', function (req, res) {
    if (req.session.theUser) {
        var data = {
            title: 'myItems',
            path: req.url,
            user: user,
            userProfile: userProfile
        };
        res.render('myItems', {
            data: data
        });
    } else {
        res.redirect('/signIn');
    }
});

router.get('/categories/item/:itemCode/feedback', [
    check('itemCode').isNumeric().withMessage('Please enter proper format')
], async function (req, res) {
    var errorMessage = req.session.errorMessage;
    req.session.errorMessage = null;
    const errors = validationResult(req);
    if(errors.array().length>0){
        req.session.errorMessage = errors.array();
        res.redirect('/error');
    }else{
        var itemData = await itemDb.getItem(req.params.itemCode);
        var data = {
            title: 'Feedback',
            path: req.url,
            item: itemData,
            user: user,
            errorMessage: errorMessage
        };
        res.render('feedback', {
            data: data
        });
    }    
});

router.get('/*', function (req, res) {
    var errorMessage = req.session.errorMessage;
    req.session.errorMessage = null;
    var data = {
        title: 'Error',
        path: req.url,
        errorMessage: errorMessage
    };
    res.render('error', {
        data: data
    });
});

module.exports = router;