const express = require('express');
const router = express.Router();



/* managers 미들웨어 선언 */
const managerLogin = require('./managerLogin');



const manager = express();


manager.use('/', managerLogin);







module.exports = router;


