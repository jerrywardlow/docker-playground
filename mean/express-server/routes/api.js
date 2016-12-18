var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var dbHost = 'mongodb://database/mean-docker';

mongoose.connect(dbHost);

var userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var User = mongoose.model('User', userSchema);

router.get('/', function(req, res) {
    res.send('api works');
});

router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        if (err) res.status(500).send(error);

        res.status(200).json(users);
    });
});

router.get('/users/:id', function(req, res) {
    User.findById(req.param.id, function(err, users) {
        if (err) res.status(500).send(error);

        res.status(200).json(users);
    });
});

router.post('/users', function(req, res) {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created'
        });
    });
});

module.exports = router;
