var express = require('express');
var userModel = require('./userModel.js');

var user = userModel.user;

// Bootstrap express
var app = express();

// routes management
app.get('/users', function (req, res) {
    user.find({}, function (err, data) {
        res.send(data);
    });
});

app.get('/users/:emailId', function (req, res) {
    if (req.params.emailId) {
        user.find({ emailId: req.params.emailId }, function (err, data) {
            res.send(data);
        });
    }
});

app.post('/users',function (req, res) {
	var userdata = new user(
		{ firstName : 'monu',
		  lastName: 'singh',
		  emailId : 'monu.singh@gmail.com'
		}); 
	userdata.save(function (err, data) {
		res.send(data);
	});

});
app.put('/users/:userId',function (req, res) {

	user.update({_id : req.params.userId },
		{ 
		  firstName : 'ravi',
		  lastName: 'gupta',
		  emailId : 'ravi.gupta@gmail.com'
		},
		function (err, data) {
		res.send(data);
	});

});

app.delete('/users/:userId', function (req, res) {
	user.remove({ _id : req.params.userId}, function (err, data) {
		res.send(data);	
	});
});


// Start the server
app.listen(1991, function () {
	console.log('Application is running at http://localhost:1991');
	
});
