// Mongoose import
var mongoose = require('mongoose');

//kept configuration url in another file
var config = require('../config');

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

//exporting the user model to use it from another file
module.exports.user = user;
