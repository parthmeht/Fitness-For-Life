var express = require('express');
var router = express.Router();
var itemDb = require('../utility/ItemDB');
var userDB = require('../utility/UserDB');
var bodyParser = require('body-parser');
var session = require('express-session');

var User = require('../model/User');
var UserProfile = require('../model/UserProfile');
var UserItem = require('../model/UserItem');
var ProfileController = require('./ProfileController');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: false
}));

var user = null;
var userProfile = null;

router.use(function getSession(req, res, next) {
    if (req.session.theUser) {
        var temp = req.session.theUser;
        user = new User(temp._userId, temp._firstName, temp._lastName, temp._email, temp._address1,
            temp._address2, temp._city, temp._state, temp._country);
        var userProfileTemp = req.session.userProfile;
        userProfile = new UserProfile(userProfileTemp._userId);
        for (var j = 0; j < userProfileTemp._userItemList.length; j++) {
            var userItem = new UserItem(userProfileTemp._userItemList[j]._itemCode,
                userProfileTemp._userItemList[j]._itemName,
                userProfileTemp._userItemList[j]._catalogCategory,
                userProfileTemp._userItemList[j]._rating,
                userProfileTemp._userItemList[j]._madeIt);

            userProfile.addItem(userItem);
        }
        //console.log(userProfile);
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

router.get('/categories', function (req, res) {
    var itemData = itemDb.getItems();
    var categories = itemDb.getCategories();
    var data = {
        title: 'Categories',
        path: req.url,
        categories: categories,
        items: itemData,
        user: user
    };
    //console.log('user : ',data.user);
    //console.log('path : ',data.path);
    res.render('categories', {
        data: data
    });
});

router.get('/contact', function (req, res) {
    var data = {
        title: 'Contact',
        path: req.url,
        user: user
    };
    //console.log('user : ',data.user);
    //console.log('path : ',data.path);
    res.render('contact', {
        data: data
    });
});

router.get('/about', function (req, res) {
    var data = {
        title: 'About',
        path: req.url,
        user: user
    };
    //console.log('user : ',data.user);
    //console.log('path : ',data.path);
    res.render('about', {
        data: data
    });
});

router.get('/categories/item/:itemCode', function (req, res) {
    var exist = itemDb.isExist(req.params.itemCode);
    if (exist) {
        var itemData = itemDb.getItem(req.params.itemCode);
        var index = -1;
        if(req.session.userProfile){
            index = ProfileController.getSelectedItem(req.session.userProfile._userItemList, req.params.itemCode);
        }
        var data = {
            title: 'Item',
            path: req.url,
            item: itemData,
            user: user,
            userProfile: userProfile,
            index: index
        };
        //console.log('item : ', data.item);
        res.render('item', {
            data: data
        });
        //console.log('path : ',data.path);
    } else {
        res.redirect('/categories');
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
        var users = userDB.getUsers();
        var user1 = users[Math.floor(Math.random() * users.length)];
        req.session.theUser = user1;
        req.session.userProfile = userDB.getUserProfile(user1.userId);
        res.redirect('/myItems');
    }
});

router.get('/categories/item/:itemCode/feedback', function (req, res) {
    var itemData = itemDb.getItem(req.params.itemCode);
    var data = {
        title: 'Feedback',
        path: req.url,
        item: itemData,
        user: user
    };
    //console.log('user : ',data.user);
    //console.log('path : ',data.path);
    res.render('feedback', {
        data: data
    });
});

router.get('/*', function (req, res) {
    var data = {
        title: 'Error',
        path: req.url
    };
    res.render('error', {
        data: data
    });
});

module.exports = router;