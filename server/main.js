var express = require('express');

var app = new express();

var port = 3000;

app
    .use(express.static(__dirname + '/../.tmp'))
    .get('/', function (request, response) {
        response.render('./../app/index.ejs');
    })

    .listen(port, function () {
        console.log('listening on port', port);
    });
