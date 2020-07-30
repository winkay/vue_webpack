import Vue from 'vue'
import {getRole} from '@/utils/roles';
import Router from 'vue-router'
import demos from './map/demo';
import login from './map/login';
import timeout from './map/timeout';
import hooks from './hooks/' // 路由钩子

Vue.use(Router)

const constantsRoutes = [
  ...login,
  ...timeout
]
const asyncRoutes = [
  ...demos,
  {
    path: '*',
    hidden: true,
    redirect: function () {
      Vue.prototype.$message.error("没有权限或者访问的页面不存在")
      return "/";
    }
  }
]

/**
 * 根据路由定义生成菜单数据
 */
let generateMenuFromRoutes = function (routes = []) {
  let menus = [];
  routes.some(route => {
    // 过滤隐藏、没有权限访问的菜单
    if (!route.hidden) {
      let m = {
        name: route.name,
        path: route.path,
        meta: route.meta
      };
      if (route.children) {
        m.subMenus = generateMenuFromRoutes(route.children)
      }
      menus.push(m)
    }
  })
  return menus;
}

function filterRouteAccess(routeList, role = "") {
  for (let index = routeList.length - 1; index >= 0; index--) {
    const route = routeList[index];
    if (route.meta && route.meta.accessFlag) {
      if (route.meta.accessFlag.includes(role)) {
        if (route.children && route.children.length > 0) {
          filterRouteAccess(route.children, role);
        }
      } else {
        routeList.splice(index, 1);
      }
    } else {
      if (route.children && route.children.length > 0) {
        filterRouteAccess(route.children, role);
      }
    }
  }
}
filterRouteAccess(asyncRoutes, getRole());

export {
  constantsRoutes,
  asyncRoutes,
  generateMenuFromRoutes
};

let routers = new Router({
  mode:"history", // Vue-Router history 模式，不需要请注释掉此部分，同时修改server/app.js中的history()部分
  routes: constantsRoutes
});
hooks(routers);

export default routers;
