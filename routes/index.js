const express = require('express');
const { sequelize } = require('../models');
const Image = require('../models/image');
// const path = require('path');

const router = express.Router();

// router.use('/', express.static(path.join(__dirname, 'public')));

// 로그인 안한 경우에 loginPage render (loginPage로 redirect?)
// 로그인 한 경우에 mainPage render
router.get('/', async (req, res, next) => {
  try{
    // res.render('index', {title : 'chabinu' } );
    // const images = await Image.findAll();
    res.render('mainPage', {title : 'chabinu' } );
  }catch(err){
    next(err);
  }
});

router.get('/login', async (req, res, next) => {
  try{
    res.render('managerLogin', {title : 'chabinu'});
  }catch(error){
    next(error);
  }
});

module.exports = router;


