var Item = require('../model/Item');

var itemDB = {};

itemDB.getItems = function () {
    return new Promise((resolve, reject) =>{
        Item.find({}).then(function(items) {
            resolve(items);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};


itemDB.getItem = function (itemCode) {
    return new Promise((resolve, reject) =>{
        Item.findOne({itemCode: itemCode}).then(function(item) {
            resolve(item);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

var categories = ['WHEY PROTEIN','BCAA','PRE-WORKOUT SUPPLEMENTS'];

itemDB.getCategories = function(){
    return categories;
};

itemDB.isExist = function(itemCode){
    return new Promise((resolve, reject) =>{
        Item.find({itemCode: itemCode}).then(function(items) {
            if(items.length)
                resolve(true);
            else
                resolve(false);
        }).catch(function(err) {
            console.log("Error:", err);
            return reject(err); 
        });
    })
};

module.exports = itemDB;