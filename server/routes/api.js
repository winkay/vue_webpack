var express = require('express');
const constants = require('../../constants');
var router = express.Router();
var logger = require('log4js').getLogger();

var proxy = require('http-proxy');
var proxyOption = {
    target:constants.SERVER_IP,
    changeOrigin:true
};
var proxyServer = proxy.createProxyServer(proxyOption);
proxyServer.on("proxyReq", function(proxyReq, req) {
  if(req.body && req.complete) {
      const bodyData = JSON.stringify(req.body);
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
});

/* GET users listing. */
router.use(function(req, res, next) {
  proxyServer.web(req, res);
  proxyServer.on("error", function(e) {
    logger.warn(e)
  });
});

module.exports = router;
