var express = require('express');
var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static('assets'));

//  routes defining
var catalogController = require('./controller/catalogController');

app.use('/', catalogController);

app.listen(8080,function(){
    console.log('app started');
    console.log('listening on port 8080');
});
