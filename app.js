

// 모듈 정의 --------------------------------------------------------------------------
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');



// 미들웨어 변수로 정의 --------------------------------------------------------------------------
const indexRouter = require('./routes/index');
const managerLoginRouter = require('./routes/login/manager');



const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 미들웨어 사용 (자바 Servlet 느낌 / 요청주소에 따른 라우터(컨트롤러) 호출) --------------------------------------------------------------------------

app.use('/', indexRouter);

// 주소 '/login'으로 접근 시 loginRouter를 사용한다.
app.use('/login', managerLoginRouter);












// 에러 페이지 관련 --------------------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
