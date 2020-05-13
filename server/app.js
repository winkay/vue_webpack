var createError = require('http-errors');
var httpProxy = require('http-proxy');
var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
// var ejs = require('ejs');
var nunjucks = require("nunjucks");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var logger = require('morgan');
var favicon = require('serve-favicon');
var logger = require('log4js');

const context = require('./utils/Context').getCurrentContext();
// var indexRouter = require('./routes/index');
// var apiRouter = require('./routes/api');
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
  serverApp.use(constants.ROOT_URL, app);
  // 重定向到根路由
  serverApp.use('/', function(req, res) {
    return res.redirect(constants.ROOT_URL);
  });
  // 全局变量
  global.DIR_NAME = __dirname;
  global.context = context;

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
  app.set('view engine', 'html');
  // app.engine(".html", ejs.__express);
  // app.set('view engine', 'ejs');

  let _isDev = process.env.NODE_ENV === 'development';
  let staticPath = _isDev?constants.DEV:constants.DIST;
  // usding nunjucks html template engine
  let nunjucksEnv = nunjucks.configure(staticPath, {
    autoescape:true,
    express:app,
    watch:_isDev,
    noCache:_isDev
  })
  nunjucksEnv.addFilter("safeJson", function(obj) {
  });
  // set favicon
  app.use(favicon(path.join(__dirname, '../static', 'favicon.png')))

  // app.use('/', indexRouter);

  // 初始化http-proxy
  var proxyServer = httpProxy.createProxyServer({
    target:constants.SERVER_IP,
    changeOrigin:true
  });
  proxyServer.on("error", function(e) {
    logger.getLogger("proxy").error(e.message);
  });
  context.setResource('proxy', proxyServer);

  //对应Vue-Router history 模式，不需要请注释掉此部分，同时修改src/router/index.js中的mode部分
  app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    rewrites: [
      {
        from: /^\/.*$/,
        to: function (context) {
          return "/";
        }
      }
    ]
  }));
  // 使用axios+http-proxy，axios默认body为json格式，不需要parser
  app.use(/^(?!\/api)/, bodyParser.json());
  app.use(/^(?!\/api)/, bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, staticPath)));

  // 路由挂载
  var routerFactory = require('./utils/RouterFactory');
  routerFactory.mount(context.getResource('routes.json'), app, context);

  // 未匹配的路由重定向到首页
  // app.use('/', function(req, res) {
  //   let indexUrl = req.baseUrl ? (req.baseUrl + '/') : '/';
  //   res.redirect(indexUrl);
  //   return '';
  // });

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
