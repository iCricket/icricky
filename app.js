var http = require('http');
var express = require('express');
var app = express();

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<html><body><h1>Hello World</h1></body></html>');
}).listen(3000)

app.get('/users/:user_id/books/:book_id', function(req, res) {
    console.log(req.params);
});

console.log('Server running on port 3000.');
