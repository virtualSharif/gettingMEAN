var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express JS Framework');
});

app.listen(1991, function () {
  console.log('Example app listening on port 1991!');
});
