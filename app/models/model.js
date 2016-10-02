/*
 * Models 
 *
 **/

var Sequelize = require("sequelize");
var config = require('./config/config.js').current;

var sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, {
  host: config.database.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  
});

module.exports = sequelize;
