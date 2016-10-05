"use strict";

import Sequelize from 'sequelize';
import config from './config/index';

let currentConfig = config.current();

var sequelize = new Sequelize(currentConfig.database.name, currentConfig.database.user, currentConfig.database.password, {
  host: config.database.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  
});

export let User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

export default sequelize;
