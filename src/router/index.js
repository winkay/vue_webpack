import Vue from 'vue'
import Router from 'vue-router'
import routesMap from './map/' // 路由映射

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: routesMap
})
