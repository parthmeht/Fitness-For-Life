var express = require('express');
var router = express.Router();
var userDB = require('../utility/UserDB');

var bodyParser = require('body-parser');
var session = require('express-session');

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

module.exports = router;