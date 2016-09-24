var http = require('http');
var express = require('express');
var user = require('./Users');

var app = express();
app.use('/users', user)

app.route('/users')
    .get(function(req, res) {
        user.get('/getUsers', function(req, res) {
            res.send('users get method');
        });
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

app.get('/users/:user_id/books/:book_id', function(req, res) {
    var parameters = req.params;
    console.log("user_id from URL:", parameters.user_id);
    res.send("Sravan Welcome here");
});
app.listen(3000, function() {
    console.log('Server running on port 3000.');
});
