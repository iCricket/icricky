var http = require('http');
var express = require('express');
var users = require('./Users');

var app = express();

app.route('/users')
    .get(function(req, res) {
        res.send('users get method');
    })
    .post(function(req, res) {
        res.send('user creation method')
    })
    .put(function(req, res) {
        res.send('user update method')
    })
    .delete(function(req, res) {
        res.send('delete user method')
    });

app.listen(3000, function() {
    console.log('Server running on port 3000.');
});
