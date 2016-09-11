var express = require("express");
var router = express.Router();
var myTime = require('./myTime');

router.use(function(req, res, next) {
	myTime.getTime();
	next();
});
var homepageHandler =  function (req, res) {
	res.send('Handler : Birds home page');
};

router.get('/',homepageHandler);

router.get('/about', function (req, res) {
	res.send('About Birds');
});

module.exports = router;
