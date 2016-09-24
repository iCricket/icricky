var express = require('express')
var router = express.Router()

router.get('/getUsers', function(req, res) {
    console.log('users');
    res.send('fetching usres list')
})

router.post('/createUser', function(req, res) {
    res.send('creating user');
})

module.exports = router
