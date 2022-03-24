const express = require('express');
const Image = require('../models/image');
const Car_wash = require('../models/car_wash');

const router = express.Router();


router.route('/')
  .get(async (req, res, next) => {
    try{
      const images = await Image.findAll();
      res.json(images);
    }catch(err){
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try{
      const images = await Image.create({
        img_path : req.body.img_path,
        img_name: req.body.img_name,
        img_original: req.body.img_original,
      });
      console.log(image);
      res.status(201).json(image);
    }catch(err){
      console.error(user);
      next(error);
    }
  })
