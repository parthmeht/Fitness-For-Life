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

router.use(bodyParser.urlencoded({ extended:false }));

router.use(session({secret: 'iloveuit'}));

router.post('/login', function(req, res){
    if(req.session.theUser){
        console.log('User already logged in');
        res.redirect('/');
    }else{
        users = userDB.getUsers();
        //console.log(users);
        var user = users[Math.floor(Math.random()*users.length)];
        //console.log(user);
        req.session.theUser = user;
        req.session.userProfile = userDB.getUserProfile(user.userId);
        //console.log('seesion userprofile', req.session.userProfile);
        res.redirect('/');
    }
});

router.post('/logout', function(req, res){
    if(req.session.theUser){
        req.session.theUser = null;
        res.redirect('/');
    }
});

router.get('/categories/item/saveIt/:itemCode', function(req, res){
    if(req.session.theUser){
        var itemData = itemDb.getItem(req.params.itemCode);
        var userItem = new UserItem(itemData.itemCode, itemData.itemName, itemData.catalogCategory, 0, false);
        req.session.userProfile._userItemList.push(userItem);
        console.log('userProfile - save : ',req.session.userProfile._userItemList);
        res.redirect('/myItems');
    }else{
        res.redirect('/categories/item/'+req.params.itemCode);
    }
});

module.exports = router;