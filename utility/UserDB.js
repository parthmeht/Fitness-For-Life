var mongoose = require("mongoose");
var User = require('../model/User');
var UserProfile = require('../model/UserProfile');

var userDB = {};

userDB.getUsers = function () {
    return new Promise((resolve, reject) =>{
        User.find({}).then(function(users) {
            resolve(users);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.getUser =  function (userId) {
    return new Promise((resolve, reject) =>{
        User.findOne({userId: userId}).then(function(user) {
            resolve(user);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.getUserProfile = function (userId) {
    return new Promise((resolve, reject) =>{
        UserProfile.findOne({userId: userId}).then(function(userProfile) {
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.addUserItem = function(userId,userItem){
    return new Promise((resolve, reject) =>{
        UserProfile.findOneAndUpdate({userId: userId}, {$push: {userItemList: userItem}}, {new: true}).then(function(userProfile) {
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.addItemRating = function (itemCode, userId, rating){
    return new Promise((resolve, reject) =>{
        UserProfile.findOne({userId: userId}).then(function(userProfile) {
            for (let index = 0; index < userProfile.userItemList.length; index++) {
                if(itemCode==userProfile.userItemList[index].itemCode){
                    userProfile.userItemList[index].rating = rating;
                }
            }
            userProfile.save();
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.addMadeIt = function (itemCode, userId, madeIt){
    return new Promise((resolve, reject) =>{
        UserProfile.findOne({userId: userId}).then(function(userProfile) {
            for (let index = 0; index < userProfile.userItemList.length; index++) {
                if(itemCode==userProfile.userItemList[index].itemCode){
                    userProfile.userItemList[index].madeIt = madeIt;
                }
            }
            userProfile.save();
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

userDB.deleteUserItem = function(itemCode, userId){
    return new Promise((resolve, reject) =>{
        UserProfile.findOne({userId: userId}).then(function(userProfile) {
            for (let index = 0; index < userProfile.userItemList.length; index++) {
                if(itemCode==userProfile.userItemList[index].itemCode){
                    userProfile.userItemList.splice(index, 1);
                }
            }
            userProfile.save();
            resolve(userProfile);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

module.exports = userDB;

var userData = [
    {
        userId: 1,
        firstName: "Parth",
        lastName: "Mehta",
        email: "pmehta13@uncc.edu",
        address1: "9000 University Terrace Dr",
        address2: "Apt A",
        city: "Charlotte",
        state: "North Carolina",
        zipCode: 28262,
        country: "United States"
    }
];

var userProfileData = [
    {
        userId: 1,
        userItemList: [
            {
                itemCode: 1,
                itemName: 'Optimum Nutrition Gold Standard',
                catalogCategory: 'WHEY PROTEIN',
                rating: 5,
                madeIt: true
            },
            {
                itemCode: 6,
                itemName: 'Essential AmiN.O. Energy',
                catalogCategory: 'BCAA',
                rating: 4,
                madeIt: true
            },
            {
                itemCode: 12,
                itemName: 'Gold Standard Pre-Workout',
                catalogCategory: 'PRE-WORKOUT SUPPLEMENTS',
                rating: 4,
                madeIt: false
            }
        ]
    }
];

/* module.exports.getUsers = function () {
    
    var users = [];
    for (var i = 0; i < userData.length; i++) {

        var user = new User(userData[i].userId,
            userData[i].firstName,
            userData[i].lastName,
            userData[i].email,
            userData[i].address1,
            userData[i].address2,
            userData[i].city,
            userData[i].state,
            userData[i].zipCode,
            userData[i].country);
        
        users.push(user);
        
    } 
    return users;
    
};

module.exports.getUserProfiles = function() {
    var userProfiles = [];
    for (var i = 0; i < userProfileData.length; i++) {
        var userProfile = new UserProfile(userProfileData[i].userId);

        for(var j=0; j < userProfileData[i].userItemList.length; j++){
            var userItem = new UserItem(userProfileData[i].userItemList[j].itemCode,
                userProfileData[i].userItemList[j].itemName,
                userProfileData[i].userItemList[j].catalogCategory,
                userProfileData[i].userItemList[j].rating,
                userProfileData[i].userItemList[j].madeIt);

            userProfile.addItem(userItem);
        }

        userProfiles.push(userProfile);
    }
    return userProfiles;
};

module.exports.getUser = function (userId) {

    for (var i = 0; i < userData.length; i++) {
        if (parseInt(userData[i].userId) == userId) {
            var user = new User(userData[i].userId,
                userData[i].firstName,
                userData[i].lastName,
                userData[i].email,
                userData[i].address1,
                userData[i].address2,
                userData[i].city,
                userData[i].state,
                userData[i].zipCode,
                userData[i].country);
            
            return user;
        }
    } 
};

module.exports.getUserProfile = function (userId) {

    for (var i = 0; i < userProfileData.length; i++) {
        if (parseInt(userProfileData[i].userId) == userId) {
            var userProfile = new UserProfile(userProfileData[i].userId);

            for(var j=0; j < userProfileData[i].userItemList.length; j++){
                var userItem = new UserItem(userProfileData[i].userItemList[j].itemCode,
                    userProfileData[i].userItemList[j].itemName,
                    userProfileData[i].userItemList[j].catalogCategory,
                    userProfileData[i].userItemList[j].rating,
                    userProfileData[i].userItemList[j].madeIt);

                userProfile.addItem(userItem);
            }

            return userProfile;
        }
        
    }
}; */