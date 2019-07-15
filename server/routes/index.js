module.exports = function (options, context) {
  var express = require('express');
  var router = express.Router();
  var getMenuCode = require("../utils/GetMenuCodeList");

  /* GET home page. */
  router.get('/', function(req, res, next) {
    let menuCodeList = getMenuCode("superadmin"); // superadmin, projectadmin, projectuser
    res.header("Cache-Control", "no-cache");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.render('index', {
      test: 'testValue',
      menuCodeList: menuCodeList
    });
  });

  return router;
}
