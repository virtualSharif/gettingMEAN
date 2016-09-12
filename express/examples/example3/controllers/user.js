var express = require('express');
var router = express.Router();
var userBusinessService = require('../business/userBusinessService');

router.get('/users', function (request, response) {
	console.log("in findAll");
	response.send(userBusinessService.findAll());
});

router.get('/users/:userId', function (request, response){
	console.log("in findone : " + request.params.userId);
	var userId = request.params.userId;	
	var returnUsers = userBusinessService.getUserById(userId);
	response.send(returnUsers);
});

router.post('/users', function (request, response){
	console.log("in save");
	response.send(userBusinessService.save(request.body));
});

router.put('/users/:userId', function (request, response){
	console.log("in update");
	response.send('HTTP PUT Method is called');
});

router.delete('/users/:userId', function (request, response){
	console.log("in delete");
	var userId = request.params.userId;
	response.send(userBusinessService.delete(userId));
});

module.exports = router;
