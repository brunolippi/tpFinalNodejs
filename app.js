var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var categoriesRouter = require('./routes/categories');
const jwt = require('jsonwebtoken');

var app = express();
app.set('secretKey','pruebatestnode')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', validateUser, usersRouter);
app.use('/productos', productosRouter);
app.use('/categories', categoriesRouter);

function validateUser (req,res,next){
  jwt.verify(req.headers["x-access-token"],req.app.get("secretKey"),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      req.body.tokenData=decoded
      next()
    }
  })
}

app.validateUser = validateUser

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
  res.json({ "error": err.message});
});

module.exports = app;
