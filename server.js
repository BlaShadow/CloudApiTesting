"use strict";

import express from 'express';
import path from 'path';
import config from './config/index';
import handlerbars from 'express3-handlebars';

//controllers
import authController from './app/web/controller/authController';

//using let
let app = express();

const router = express.Router();

//View template config
app.set('views', path.join(__dirname, 'templates'));
app.engine('html', handlerbars({ extname:'.html'}));
app.set('view engine', 'html');

//Server static files
router.use('/', express.static(path.join(__dirname, 'public')));
app.use(router);

//Auth controller
router.use('/', authController);

// using arrow syntax
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

let currentConfig = config.current();

currentConfig.application.port = process.env.PORT;
currentConfig.application.host = process.env.IP;

//Start running app
app.listen(currentConfig.application.port, () => {
    console.log("Running app on port ", config.current().application.port);
});

module.exports = app;