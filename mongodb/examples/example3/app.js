//express
var express = require('express');
var app = express();

//routes management
var userController = require('./controllers/userController.js');

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//all routes will go here
app.use('/api', userController);

// Start the server
app.listen(1991, function () {
	console.log('Application is running at http://localhost:1991');
	
});
