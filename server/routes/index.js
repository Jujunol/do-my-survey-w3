/// <reference path="../../typings/tsd.d.ts" />

var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    if(req.user) {
        res.redirect('/survey');
    }
    res.render('index', { 
        title: 'Do My Survey'
    });
});

module.exports = router;
