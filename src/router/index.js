import Vue from 'vue'
import Router from 'vue-router'
import { routes as routesMap } from './map/' // 路由映射
import hooks from './hooks/' // 路由钩子

Vue.use(Router)

let routers = new Router({
  mode:"history", // Vue-Router history 模式，不需要请注释掉此部分，同时修改server/app.js中的history()部分
  routes: routesMap
});
hooks(routers);

export default routers;
