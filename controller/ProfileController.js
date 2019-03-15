var express = require('express');
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

router.post('/login', function (req, res) {
    if (req.session.theUser) {
        console.log('User already logged in');
        res.redirect('/');
    } else {
        users = userDB.getUsers();
        //console.log(users);
        var user = users[Math.floor(Math.random() * users.length)];
        //console.log(user);
        req.session.theUser = user;
        req.session.userProfile = userDB.getUserProfile(user.userId);
        //console.log('seesion userprofile', req.session.userProfile);
        res.redirect('/');
    }
});

router.post('/logout', function (req, res) {
    if (req.session.theUser) {
        req.session.theUser = null;
        res.redirect('/');
    }
});

router.get('/categories/item/saveIt/:itemCode', function (req, res) {
    var index = -1;
    if (req.session.theUser) {
        index = getSelectedItem(req.session.userProfile._userItemList, req.params.itemCode);
        if (index == -2) {
            var itemData = itemDb.getItem(req.params.itemCode);
            var userItem = new UserItem(itemData.itemCode, itemData.itemName, itemData.catalogCategory, 0, false);
            req.session.userProfile._userItemList.push(userItem);
            console.log('userProfile - save : ', req.session.userProfile._userItemList);
            res.redirect('/myItems');
        } else {
            console.log('Item already present');
            res.redirect('/myItems');
        }
    } else {
        res.redirect('/categories/item/' + req.params.itemCode);
    }
});

router.post('/update/feedback/:itemCode', function (req, res) {
    var index = -1;
    if (req.session.theUser) {
        index = getSelectedItem(req.session.userProfile._userItemList, req.params.itemCode);
        if (index == -2) {
            console.log('Item not present in the users profile');
            res.redirect('/myItems');
        } else {
            if (req.body.feedbackHidden == 'rating') {
                console.log(req.body.rating);
                req.session.userProfile._userItemList[index]._rating = parseInt(req.body.rating, 10);
                res.redirect('/myItems');
            } else if (req.body.feedbackHidden == 'madeIt') {
                console.log(req.body.madeItRadio);
                req.session.userProfile._userItemList[index]._madeIt = JSON.parse(req.body.madeItRadio);
                res.redirect('/myItems');
            } else {
                console.log('Incorrect paramter');
                res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
            }
        }
    } else {
        res.redirect('/categories/item/' + req.params.itemCode + '/feedback');
    }
});

router.get('/myItems/delete/:itemCode', function (req, res) {
    var index = -1;
    if (req.session.theUser) {
        index = getSelectedItem(req.session.userProfile._userItemList, req.params.itemCode);
        if (index == -2) {
            console.log('Item not present in the users profile');
            res.redirect('/myItems');
        } else {
            req.session.userProfile._userItemList.splice(index, 1);
            res.redirect('/myItems');
        }
    } else {
        res.redirect('/myItems');
    }
});

function getSelectedItem(itemList, itemCode) {
    for (var index = 0; index < itemList.length; index++) {
        //console.log(itemList[index]._itemCode);
        //console.log(itemList[index]._itemCode == parseInt(itemCode,10));
        if (itemList[index]._itemCode == parseInt(itemCode, 10)) {
            return index;
        }
    }
    return -2;
}

module.exports = router;