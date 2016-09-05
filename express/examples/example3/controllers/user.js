var express = require('express');
var router = express.Router();

var getAllUsers = function() {
	return [{ 
			firstName : "Sharif", 
			lastName : "Malik"
		},
		{ 
			firstName : "Atul", 
			lastName : "Ranjan"
		},
		{ 
			firstName : "Praphulla", 
			lastName : "Prakash"
		}];
};

router.get('/users', function (request, response) {
	console.log("in findAll");
	response.send(getAllUsers());
});

router.get('/users/:userId', function (request, response){
	console.log("in findone");
	response.send('HTTP GET Method is called');
});

router.post('/users', function (request, response){
	console.log("in save");
	response.send('HTTP POST Method is called');
});

router.put('/users/:userId', function (request, response){
	console.log("in update");
	response.send('HTTP PUT Method is called');
});

router.delete('/users/:userId', function (request, response){
	console.log("in delete");
	response.send('HTTP DELETE Method is called');
});

module.exports = router;
