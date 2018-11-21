var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

// Add a new burger.
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

// Update a burger.
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Delete a burger.
router.post('/burger/remove/:id', function (req, res) {
  burger.deleteOne(req.params.id, function() {
    res.redirect('/index');
  });
});

// Export routes.
module.exports = router;