var express = require('express');
var router = express.Router();
var user = require('./user');

router.use(user);

module.exports = router;
