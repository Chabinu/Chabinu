const express = require('express');
// const path = require('path');

const router = express.Router();

// router.use('/', express.static(path.join(__dirname, 'public')));


// 작업 목록
router.get('/list' /* || '/' */ , async (req, res, next) => {
  try{
    res.render('workList', {title : 'list'});
  }catch(error){
    next(error);
  }
});

// 작업 상세
router.get('/detail' /* || '/' */ , async (req, res, next) => {
  try{
    res.render('workDetail', {title : 'detail'});
  }catch(error){
    next(error);
  }
});

// 작업 메인(카테고리)
router.get('/main' /* || '/' */ , async (req, res, next) => {
  try{
    res.render('workMain', {title : 'main'});
  }catch(error){
    next(error);
  }
});

// 작업 설정(차량번호, 세차, 소독, 등)
router.get('/setting', async (req, res, next) => {
  try{
    res.render('workSetting', {title : 'setting'});
  }catch(error){
    next(error);
  }
});



module.exports = router;