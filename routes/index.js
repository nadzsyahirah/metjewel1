const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
//new added
//const custConsult = require('../models/custdata');
const custConsult = require('../models/custdata');


//Welcome page
router.get('/', (req, res) => res.render('welcome'));


//Dashboard
/*
router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard', {
        name: req.user.name
    }));
*/


router.get('/dashboard', ensureAuthenticated, (req, res) => {
    custConsult.find({}, function(err, custcons) {
        res.render('dashboard', {
            name: req.user.name,
            custconsList: custcons
    })
    })
});

module.exports = router;

