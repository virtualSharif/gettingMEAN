var express = require('express');

var app = express();

var requestTime = function (req, res, next) {
	req.requestTime	= Date.now();
	next();
};

app.use(requestTime);

app.get('/', function (req, res) {
	var responseText = "<marquee>Hello World</marquee><br>";
	responseText += '<small> Requested at : '+ req.requestTime + '</small>';
	res.send(responseText);
});

app.listen(1991, function () {
	console.log("Application is running at http://localhost:1991/ ");
});
