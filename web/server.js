// web.js
var express = require("express");
var logfmt = require("logfmt");
var fs = require("fs");

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
    res.sendfile('./web/views/index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});