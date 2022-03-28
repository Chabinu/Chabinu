const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const Car_wash = require('./car_wash');
const Image = require('./image');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Car_wash = Car_wash;
db.Image = Image;

Car_wash.init(sequelize);
Image.init(sequelize);

Car_wash.associate(db);
Image.associate(db);

module.exports = db;
