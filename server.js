var express = require('express');
var path = require('path');

var app = express();

const PORT = 8000;

app.listen(PORT, function() {
  logHelpfulInfo();
})

app.get("/", function(req, res) {
  var pathToHtml = path.join(__dirname, 'index.html');
  res.sendFile(pathToHtml);
})

// helper functions
var logHelpfulInfo = function () {
  console.log("Hi, I am running on port:", PORT);
  console.log("__dirname is;", __dirname);  
}
