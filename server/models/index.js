const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Schedule = require('./Schedule')(sequelize, Sequelize);

module.exports = db;