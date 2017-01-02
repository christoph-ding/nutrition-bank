var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();
app.use(morgan());

const PORT = 8000;

app.listen(PORT, function() {
  logHelpfulInfo();
})

app.get("/", function(req, res) {
  res.sendFile(fullFilePath('index.html'));
})

app.get("/src/index.js", function(req, res) {  
  res.sendFile(fullFilePath('src/index.js'));
})

// helper functions
var logHelpfulInfo = function () {
  console.log("Hi, I am running on port:", PORT);
  console.log("__dirname is;", __dirname);  
}

var fullFilePath = function(fileName) {
  return path.join(__dirname, fileName);
}
