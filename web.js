var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var my_data = fs.readFileSync('./index.html','utf-8');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(my_data);
});

// var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
