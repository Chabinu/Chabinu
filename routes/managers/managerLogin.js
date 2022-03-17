const express = require('express');
const router = express.Router();
const connection = require('../../dbconfig');


// /login


router.get('/', function(req, res, next) {

  res.render('./manager/managerLogin.ejs');

});

router.post('/',function(req, res, next) {

  res.redirect('/main');

});







module.exports = router;
