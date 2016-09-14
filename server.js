"use strict";

import express from 'express';
import path from 'path';
import config from './config/index';
import cons from 'consolidate';
import handlerbars from 'express3-handlebars';

//using let
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', handlerbars({extname:'html', defaultLayout:'index.html'}));
app.set('view engine', 'hbs');

app.get('/nice', (req, res) => {
  res.send('Hello World! <br>');
});

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

//Start running app
app.listen(config.dev.port, () => {
    console.log("Running app on port ", config.dev.port);
});

module.exports = app;