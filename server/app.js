var createError = require('http-errors');
var httpProxy = require('http-proxy');
var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var logger = require('log4js');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
const constants = require('../constants');

const server = function(serverApp) {
  logger.configure({
    replaceConsole: true,
    level: 'WARN',
    appenders: {
      console: { type: "console" }
    },
    categories: {
      default: {
        appenders: ["console"],
        level: 'WARN'
      }
    }
  });

  var app = express();

  app.use(history({
    index:"/index.html"
  }))

  serverApp.use(constants.ROOT_URL, app);
  //重定向到根路由
  serverApp.use('/', function(req, res) {
    return res.redirect(constants.ROOT_URL);
  });

  // app.use(logger('dev'));
  let httpLogger = logger.connectLogger(logger.getLogger("http"), {
    level: 'auto',
    format: (req, res, format) => {
      return format(`:remote-addr - ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"`);
    }
  });
  app.use(httpLogger);

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.engine(".html", ejs.__express);
  app.set('view engine', 'html');

  app.use("/api", apiRouter);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  // app.use(express.static(path.join(__dirname, 'public')));
  let staticPath = process.env.NODE_ENV == 'development'?'../dev':'../dist';
  app.use(express.static(path.join(__dirname, staticPath)));

  app.use('/', indexRouter);

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
}

module.exports = server;
