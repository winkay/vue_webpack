import Vue from 'vue'
import Router from 'vue-router'
import { routes as routesMap } from './map/' // 路由映射
import hooks from './hooks/' // 路由钩子

Vue.use(Router)

let routers = new Router({
  mode:"history",
  routes: routesMap,
  scrollBehavior: () => ({ y: 0 })
});
hooks(routers);

export default routers;
