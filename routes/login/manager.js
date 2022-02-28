const express = require('express');
const router = express.Router();
const connection = require('../../dbconfig');


// /login


router.get('/', function(req, res, next) {

  // res.render('./manager/managerLogin.ejs');
  connection.query('SELECT * FROM manager', function(error, result){
    if(error) throw error;
    res.send(result);
  })

});





module.exports = router;
