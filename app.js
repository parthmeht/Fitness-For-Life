var express = require('express');
var app = express();
var helmet = require('helmet')
app.use(helmet())
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Fitness-For-Life',{ useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// view engine setup
app.set('view engine', 'ejs');
app.use(express.static('assets'));

var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
    secret: 'fitnessforlife',
    resave: true,
    saveUninitialized: true,
    name: 'sessionId'
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