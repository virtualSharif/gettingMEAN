var express = require('express');

var app = express();

var myLogger = function (req, res, next) {
	console.log('LOGGED');
	next();
};

app.use(myLogger);

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.listen(1991, function () {
	console.log("Application is running at http://localhost:1991/ ");
});
