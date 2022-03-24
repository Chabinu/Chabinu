const express = require('express');
const router = express.Router();


// /login


router.get('/', function(req, res, next) {

  res.render('./managerLogin.html', {title : 'chabinu'});

});

router.post('/',function(req, res, next) {

  res.redirect('/main');

});







module.exports = router;
