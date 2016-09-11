var express = require('express');
var birds = require('./birds');

var app = express();

app.use('/birds', birds);

app.listen(1991, function () {
	console.log("Application is running at http://localhost:1991/birds ");
});
