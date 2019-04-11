var express = require('express');
var querystring = require('querystring');    

var router = express.Router();
var userDB = require('../utility/UserDB');
var itemDb = require('../utility/ItemDB');

var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('../model/User');
var UserProfile = require('../model/UserProfile');
var UserItem = require('../model/UserItem');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: false
}));

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

router.post('/login', async function (req, res) {
    if (req.session.theUser) {
        console.log('User already logged in');
        res.redirect('/');
    } else {
        //var users = await userDB.getUsers();
        //console.log(users);
        //var user = users[Math.floor(Math.random() * users.length)];
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

router.get('/categories/item/saveIt/:itemCode', async function (req, res) {
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
});

router.post('/update/feedback/:itemCode', async function (req, res) {
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
});

router.get('/myItems/delete/:itemCode', async function (req, res) {
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
});

router.get('/user/newPlan', function(req, res){
    if (req.session.theUser) {
        req.session.userProfile._userItemList = [];
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