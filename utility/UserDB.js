var User = require('../model/User');
var UserItem = require('../model/UserItem');
var Item = require('../model/Item');
var UserProfile = require('../model/UserProfile');

var data = [
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
        country: "United States",
        userProfile: {
            userId: 1,
            userItemList: [
                {
                    item: 1,
                    rating: 5,
                    madeIt: True
                },
                {
                    item: 6,
                    rating: 4,
                    madeIt: True
                },
                {
                    item: 12,
                    rating: 4,
                    madeIt: False
                }
            ]
        }
    }
];

module.exports.getUsers = function () {
    
    var users = [];
    for (var i = 0; i < userData.length; i++) {
        var userProfile = new UserProfile(data[i].userProfile.userId);

        for(var j=0; j < data[i].userProfile.userItemList.length; j++){
            var userItem = new UserItem(data[i].userProfile.userItemList[j].item,
                data[i].userProfile.userItemList[j].rating,
                data[i].userProfile.userItemList[j].madeIt);

            userProfile.addItem(userItem);
        }

        var user = new User(data[i].userId,
            data[i].firstName,
            data[i].lastName,
            data[i].email,
            data[i].address1,
            data[i].address2,
            data[i].city,
            data[i].state,
            data[i].zipCode,
            data[i].country,
            userProfile);
        
        users.push(user);
        
    } 
    return users;
    
};