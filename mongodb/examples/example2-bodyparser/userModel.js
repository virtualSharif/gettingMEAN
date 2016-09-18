// Mongoose import
var mongoose = require('mongoose');
var config = require('./config.js');

// Mongoose connection to MongoDB 
mongoose.connect(config.mongo.url, function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String
});

// Mongoose Model definition
var user = mongoose.model('user', UserSchema);

module.exports.user = user;
