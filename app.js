var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Fitness-For-Life',{ useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

/* var User = require('./model/User');

var User1 = new User({
    userId: "hello",
    password: "password123",
    firstName: "hello",
    lastName: "world",
    email: "pmehta13@uncc.edu",
    address1: "9000 University Terrace Dr",
    address2: "Apt A",
    city: "Charlotte",
    state: "North Carolina",
    zipCode: 28262,
    country: "United States"
});

User1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(book.userId + " saved to bookstore collection.");
});

User.find({}).exec(function (err, users) {
    if (err) {
        console.log("Error:", err);
    }
    else {
        console.log(users);
        return users;
    }
}); */

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