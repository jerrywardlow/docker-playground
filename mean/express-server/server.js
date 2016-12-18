var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var api = require('./routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

app.use('/', api);

var port = process.env.PORT || '3000';
app.set('port' , port);

var server = http.createServer(app);

server.listen(port, () => console.log('Up on localhost:' + port));
