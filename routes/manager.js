const express = require('express');

const router = express.Router();


// /login
router.get('/', async (req, res, next) => {
  try{
    res.render('managerLogin', {title : 'chabinu'});
  }catch(error){
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try{
    res.redirect('/main');
  }catch(error){
    next(error);
  }
});





module.exports = router;
