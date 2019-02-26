var express = require('express');
var router = express.Router();
var itemDb = require('../utility/ItemDB');

/* GET home page. */
router.get('/', function(req, res){
    res.render('index');
});

router.get('/categories', function(req, res) {
    var itemData = itemDb.getItems();
    var categories = itemDb.getCategories();
    var data= {
        title:'Categories',
        path: req.url,
        categories: categories,
        items: itemData
    }
    res.render('categories',{data: data});
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/categories/item/:itemCode', function(req, res) {
    var itemData = itemDb.getItem(req.params.itemCode);
    var data= {
        title:'Item',
        path: req.url,
        item: itemData
    }
    res.render('item',{data: data});
});

router.get('/myItems', function(req, res) {
    res.render('myItems');
});

router.get('/feedback', function(req, res) {
    res.render('feedback');
});

module.exports = router;