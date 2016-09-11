var express = require('express');
var router = express.Router();

var users = [{ 
			id : 1,
			firstName : "Sharif", 
			lastName : "Malik"
		},
		{ 
			id : 2,
			firstName : "Atul", 
			lastName : "Ranjan"
		},
		{ 
			id : 3,
			firstName : "Praphulla", 
			lastName : "Prakash"
		}];


var getUserById = function (userId) {
	for(var i=0 ; i < users.length ; i++) {
		if(users[i].id == userId)
		{
			return users[i];	
		}
	}	
};

router.get('/users', function (request, response) {
	console.log("in findAll");
	response.send(users);
});

router.get('/users/:userId', function (request, response){
	console.log("in findone : " + request.params.userId);
	var userId = request.params.userId;
	response.send(getUserById(userId));
});

router.post('/users', function (request, response){
	console.log("in save");
	users.push(request.body);
	response.send(request.body);
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
