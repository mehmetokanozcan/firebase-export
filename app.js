var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const isLogin = require('./_helper/index')

var indexRouter = require('./routes/index');
var exportRouter = require('./routes/export');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', isLogin, indexRouter);
app.use('/export', exportRouter);

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
  res.status(err.status);
  res.send({
    message: err.message,
    status: err.status,
  })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.setHeader('Content-Type', 'application/json');
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
