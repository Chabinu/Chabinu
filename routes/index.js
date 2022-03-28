const express = require('express');
const { sequelize } = require('../models');
const Image = require('../models/image');


const router = express.Router();


// 로그인 안한 경우에 loginPage render (loginPage로 redirect?)
// 로그인 한 경우에 mainPage render
router.get('/', async (req, res, next) => {
  try{
    const images = await Image.findAll();
    res.render('index', {title : 'chabinu' } );
    // res.render('mainPage', {title : 'chabinu' } );
  }catch(err){
    next(err);
  }
});

module.exports = router;


