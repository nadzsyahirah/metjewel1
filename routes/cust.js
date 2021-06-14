const express = require('express');
const router = express.Router();

//custdata model
const custconsults = require('../models/custdata');

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    custconsults.find({}, function(err, custcons) {

    res.render('dashboard', {
        name: req.user.name,
        custconsultsList: req.custcons.custconsults
    })
    })
});

module.exports = router;