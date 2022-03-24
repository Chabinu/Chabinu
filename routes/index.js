const express = require('express');
const { sequelize } = require('../models');
const Image = require('../models/image');


const router = express.Router();


router.get('/', async (req, res, next) => {
  try{
    const images = await Image.findAll();
    res.render('index', {images } );
  }catch(err){
    next(err);
  }
});


module.exports = router;


