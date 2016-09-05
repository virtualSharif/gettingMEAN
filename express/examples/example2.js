var express = require('express');
var app = express();

//Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
  res.send('Hello Express JS Framework!');
});

//Respond to GET request on the /user route
app.get('/user', function (req, res) {
  res.send('Got a Get request at /user');
});

//Respond to POST request to the /user route 

app.post('/user', function (req, res) {
  res.send('Got a POST request at /user');
});

//Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

//Respond to a DELETE request to the /user route:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(1991, function () {
  console.log('Example app listening on port 1991!');
});
