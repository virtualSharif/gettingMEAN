// express
var express = require('express');
var app = express();

//userModel 
var userModel = require('../model/userModel.js');
var user = userModel.user;

//rest api's
//findall
app.get('/users', function (req, res) {
    user.find({}, function (err, data) {
        res.send(data);
    });
});

//findOne
app.get('/users/:userId', function (req, res) {
    if (req.params.userId) {
        user.find({ _id: req.params.userId }, function (err, data) {
            res.send(data);
        });
    }
});

//save
app.post('/users',function (req, res) {
	var userdata = new user(
		{ firstName :req.body.firstName,
		  lastName: req.body.lastName,
		  emailId : req.body.emailId
		}); 
	userdata.save(function (err, data) {
		res.send(data);
	});

});

//update
app.put('/users/:userId',function (req, res) {

	user.update({_id : req.params.userId },
		{ 
		  firstName :req.body.firstName,
		  lastName: req.body.lastName,
		  emailId : req.body.emailId
		},
		function (err, data) {
		res.send(data);
	});

});

//delete
app.delete('/users/:userId', function (req, res) {
	user.remove({ _id : req.params.userId}, function (err, data) {
		res.send(data);	
	});
});

//exporting the app to reuse from another file
module.exports = app;
