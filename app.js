var express = require('express');
var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static('assets'));

var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session({
    secret: 'fitnessforlife',
    resave: true,
    saveUninitialized: true
}));

//  routes defining
var catalogController = require('./controller/catalogController');
var ProfileController = require('./controller/ProfileController');

app.use('/', ProfileController.router);
app.use('/', catalogController);

app.listen(8080, function () {
    console.log('app started');
    console.log('listening on port 8080');
});