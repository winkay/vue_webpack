module.exports = function (options, context) {
  var express = require('express');
  var router = express.Router();
  const {v4:uuid} = require('uuid');
  const sessionHelper = require('../utils/SessionHelper')

  /* GET index page */
  router.post('/', function(req, res, next) {
    let body = req.body;
    let { userName, password } = body;
    let resData = {};

    if (!userName || !password) {
      resData = {
        flag:false,
        data:'用户名或密码错误'
      }
    }
    if (userName === 'admin' && password === '111111') { // 管理员登录
      resData = {
        flag:true,
        data:{
          token:uuid(), // 为演示方便，使用uuid作为token
          roleType:'0',
          userName:userName
        }
      }
    } else if (userName === 'user' && password === '111111') { // 用户登录
      resData = {
        flag:true,
        data:{
          token:uuid(), // 为演示方便，使用uuid作为token
          roleType:'1',
          userName:userName
        }
      }
    }
    sessionHelper.setSession(req, res, resData.data)
    res.json(resData)
  });

  return router;
}
