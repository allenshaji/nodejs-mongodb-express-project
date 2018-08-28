// ticket.route.js

const express = require('express');
const router = express.Router();

const Student = require('../models/Students');

 /* GET ALL STUDENTS */
router.get('/getall', function(req, res, next) {
  Student.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post('/add', function(req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) {
      return res.json({success: false, msg: 'Failed to save data'});
    }
    res.json({success: true, msg: 'Successfully added the data'});
  });
});

 
 module.exports = router;