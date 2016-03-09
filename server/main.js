var express = require('express');

var app = new express();

var port = 3000;

app.get('/', function (request, response) {
    response.render('./../app/index.ejs');
});

app.listen(port, function () {
    console.log('listening on port', port);
});
