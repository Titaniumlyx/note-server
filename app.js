var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./database/config');


var index = require('./controller/index');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({  //这是将session 保存在内存当中   每个人分配一个session  但是访问量过多，内存肯定是扛不住的，所以必须做 ‘持久化处理’(用connect-mongo 插件)
    secret: 'LC',   //签名秘钥  加密的过程中需要  可以自己定
    resave: false,   //是否允许session重新修改
    saveUninitialized: true,   //是否保存初始化的session
    cookie: { secure: false }, //不能用默认的，改为false ,因为会没有效果，它走的是https ,我们没有
    store: new MongoStore({    //options即（）里一般写配置项
        url: 'mongodb://localhost/note',
        ttl: 14 * 24 * 60 * 60  //过期时间: 设的是14天
    })  //这便为session持久化
}))


app.use('/',index);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
