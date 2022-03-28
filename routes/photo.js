const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

// const { Image , Car_wash } = require('../models');
// const Image = require('../models/image');
// const Car_wash = require('../models/car_wash');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : 'chabinuadmin1234!',
  database: 'chabinu',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

try{
  fs.readdirSync('uploads');
}catch(error){
  console.error('uploads 폴더가 없어 생성합니다.');
  fs.mkdirSync('uploads');
}

// 하드에 사진 업로드
const upload = multer({
  storage : multer.diskStorage({
    destination(req, file, cb){
      cb(null, 'uploads/');
    },
    // 저장 파일 명 (originalname + 차량번호 + 시간 + 확장자로 만들기)
    filename(req, file, cb){
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + '_carNum' + Date.now() /*getCurrentDate() + */ + ext);
    },
  }),
  // 용량 제한 10mb
  limits : {fileSize : 10 * 1024 * 1024},
});


const router = express.Router();


router.get('/', (req, res, next) => {

  res.render('multerTest');

});

router.post('/upload', upload.single('image1'), async (req, res, next)=> {
  
  pool.query(
    'INSERT INTO `images` (img_path, img_name, img_original, wash_no) VALUES ("/uploads/", "wash1", "20220325", 3)'
  , )
  const carNumber =  req.body.carNumber;
  
  console.log(carNumber);

});
  






// 조회하기
// pool.query(
//   'SELECT * FROM `images` WHERE `wash_no` =' + 3,
// function(err, results, fields){
//   console.log(results); // results는 서버로부터 반환된 행들을 포함한다.
//   // console.log(fields); // fields는 results에 관한 부가적인 메타데이터들을 포함한다.
//   next();
// });





// 라우터
// 입력 화면 출력
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/multerTest.html'));
// });

// // 업로드한 이미지 주소를 반환함
// router.post('/img', upload.single('image1'), async (req, res, next) => {
//   console.log(req.file);
//   res.json({ url : `/img/${req.file.filename}` });

// });

// const upload2 = multer();

// router.post('/', upload2.none(), async (req, res, next) => {
//   try{
//     const photo = await Image.create({

//       img_path : req.body.img_path,
//       img_name : req.body.img_name,
//       img_original : req.body.img_original,
      
//     });
//     console.log(photo);
//     res.status(201).json(photo);
    
//   }catch(error){
//     console.error(error);
//     next(error);
//   }
// });


// router.route('/')
//   .get(async (req, res, next) => {
//     try{
//       const images = await Image.findAll();
//       res.json(images);
//     }catch(err){
//       console.error(err);
//       next(err);
//     }
//   })


module.exports = router;