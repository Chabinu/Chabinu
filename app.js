const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : 'chabinuadmin1234!',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// const { sequelize } = require('./models');

dotenv.config();

// 라우터 변수 설정
const indexRouter = require('./routes');
const managerRouter = require('./routes/manager');
const photoRouter = require('./routes/photo');


const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine' , 'html');

// 넌적스 (view template)
nunjucks.configure('views', {
  express : app,
  watch : true,
});

// 시퀄라이즈(db 연결 라이브러리)
// sequelize.sync({ force : false})
//   .then(() => {
//     console.log('데이터베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   });


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

// 라우터 미들웨어 설정
app.use('/', indexRouter);
app.use('/manager', managerRouter);
app.use('/photo', photoRouter)



// 멀터 미들웨어

// const multer = require('multer');
// const fs = require('fs');

// try{
//   fs.readdirSync('uploads');
// }catch(error){
//   console.error('uploads 폴더가 없어 생성합니다.');
//   fs.mkdirSync('uploads');
// }

// const upload = multer({
//   storage : multer.diskStorage({
//     destination(req, file, done){
//       done(null, 'uploads/');
//     },
//     // 저장 파일 명 (originalname + 차량번호 + 시간 + 확장자로 만들기)
//     filename(req, file, done){
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + '_carNum' + /*getCurrentDate() + */ ext);
//     },
//   }),
//   // 용량 제한 10mb
//   limits : {fileSize : 10 * 1024 * 1024},
// })



// 현재 시간 구하는 함수
// function getCurrentDate(){
//   let date = new Date();
  
//   let year = date.getFullYear.toString();
  
//   let month = date.getMonth + 1;
//   month = month < 10 ? '0' + month.toString() : month.toString();

//   let day = date.getDate();
//   day = day < 10 ? '0' + day.toString() : day.toString();
  
//   let hour = date.getHours();
//   hour = hour < 10 ? '0' + hour.toString() : hour.toString();

//   let minutes = date.getMinutes();
//   minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

//   let seconds = date.getSeconds();
//   seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

//   return year + month + day + hour + minutes + seconds;
// }



// app.get('/upload', (req, res) => {
//   res.sendFile(path.join(__dirname, '/views/multerTest.html'));
// });

// app.post('/upload', 
//   upload.fields([{ name : 'image1'} , { name : 'image2'} , { name : 'image3'} , { name : 'image4'}]),
//   (req, res) => {
//     console.log(req.files, req.body);
//     res.send('업로드 성공!');
//   }
// );


app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 존재하지 않습니다.`)
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 준비 중');
});




