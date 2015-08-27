var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(5000, function () {
    console.log('Server is alive!');
});