const express = require('express');
const router = express.Router();
const connection = require('../../dbconfig');

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');

// app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
// app.use(passport.initialize());
// app.use(passport.session()); 

// /login


router.get('/', function(req, res, next) {

  res.render('./manager/managerLogin.ejs');

});

router.post('/', passport.authenticate('local', {failureRedirect : '/fail'}), function(req, res, next) {

  res.redirect('/main');

});


// passport.use(new LocalStrategy({
//   usernameField: 'managerId',
//   passwordField: 'managerPw',
//   session: true,
//   passReqToCallback: false,
// }, function (inputId, inputPw, done) {
  
//   console.log(inputId, inputPw);

//   connection.query('SELECT ')

//   db.collection('login').findOne({ id: inputId }, function (에러, 결과) {
//     if (에러) return done(에러)

//     if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
//     if (inputPw == 결과.pw) {
//       return done(null, 결과)
//     } else {
//       return done(null, false, { message: '비번틀렸어요' })
//     }
//   })
// }));






module.exports = router;
