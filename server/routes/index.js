module.exports = function (options, context) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      test: 'testValue'
    });
  });

  return router;
}
