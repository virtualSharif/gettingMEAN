var express = require('express');

// Step 1 : Mongoose import
var mongoose = require('mongoose');

// Step 2 :Mongoose connection to MongoDB 
mongoose.connect('mongodb://localhost:27017/mongoose-test', function (error) {
    if (error) {
        console.log(error);
    }
});

// Step 3 : Mongoose Schema definition
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String
});

// Step 4 : Mongoose Model definition
var user = mongoose.model('user', UserSchema);

// Bootstrap express
var app = express();

// routes management
app.get('/users', function (req, res) {
    user.find({}, function (err, data) {
        res.send(data);
    });
});

app.get('/users/:email', function (req, res) {
    if (req.params.email) {
        user.find({ emailId: req.params.email }, function (err, data) {
            res.send(data);
        });
    }
});

// Start the server
app.listen(1991, function () {
	console.log('Application is running at http://localhost:1991');
	
});

