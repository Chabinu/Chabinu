const express = require('express');
const router = express.Router();

// /login


router.get('/', function(req, res, next) {

  res.render('./manager/managerLogin.ejs');

});





module.exports = router;
