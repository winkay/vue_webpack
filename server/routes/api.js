var express = require('express');
var router = express.Router();
var logger = require('log4js').getLogger();
logger.level = "warn";

var proxy = require('http-proxy');
var proxyServer = proxy.createProxyServer();
var proxyPath = "http://api.qingyunke.com";//目标后端服务地址
var proxyOption = {
    target:proxyPath,
    changeOrigin:true
};

/* GET users listing. */
router.use(function(req, res, next) {
	logger.warn(proxyPath + req.url)
  proxyServer.web(req, res, proxyOption)
  proxyServer.on("error", function(e) {
		logger.warn(e)
  });
});

module.exports = router;
