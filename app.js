const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

// 미들웨어
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : process.env.COOKIE_SECRET,
  cookie : {
    httpOnly : true,
    secure : false,
  },
  name : 'session-cookie',
}));


// 멀터 미들웨어

const multer = require('multer');
const fs = require('fs');

try{
  fs.readdirSync('uploads');
}catch(error){
  console.error('uploads 폴더가 없어 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage : multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/');
    },
    // 저장 파일 명 (originalname + 차량번호 + 시간 + 확장자로 만들기)
    filename(req, file, done){
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + '_carNum' + getCurrentDate() + ext);
      console.log('파일명' + path.basename(file.originalname, ext));
      console.log('시간' + Date.now());
    },
  }),
  // 용량 제한 10mb
  limits : {fileSize : 10 * 1024 * 1024},
})

// 현재 시간 구하는 함수
function getCurrentDate(){
  let date = new Date();
  
  let year = date.getFullYear.toString();
  
  let month = date.getMonth + 1;
  month = month < 10 ? '0' + month.toString() : month.toString();

  let day = date.getDate();
  day = day < 10 ? '0' + day.toString() : day.toString();
  
  let hour = date.getHours();
  hour = hour < 10 ? '0' + hour.toString() : hour.toString();

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

  return year + month + day + hour + minutes + seconds;
}

app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/multerTest.html'));
});

app.post('/upload', 
  upload.fields([{ name : 'image1'} , { name : 'image2'} , { name : 'image3'} , { name : 'image4'}]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
  }
);


app.use((req, res, next) => {
  console.log('모든 요청에 실행');
  next();
});

app.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '/views/mainPage.html'));
  console.log('GET / 요청 실행');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 이동');
});

// app.get('/photo', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '/views/workDetail.html'));
//   console.log('GET / 요청 실행');
//   next();
// }, (req, res) => {
//   throw new Error('에러는 에러 처리 미들웨어로 이동');
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 준비 중');
});




