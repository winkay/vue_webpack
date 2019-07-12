import Vue from 'vue';
import demos from './demo';

const routes = [
  ...demos,
  {
    path: '*',
    hidden: true,
    redirect: function () {
      return "/";
    }
  }
]

/**
 * 根据路由定义生成菜单数据
 */
let generateMenuFromRoutes = function (routes = []) {
  const menuCodeList = Vue.menuCodeList || [];
  filterRouteAccess(routes, menuCodeList);

  let menus = [];
  routes.some(route => {
    // 过滤隐藏、没有权限访问的菜单
    if (!route.hidden && menuCodeList.indexOf(route.meta.accessFlag) >= 0) {
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

function filterRouteAccess(routeList, menuCodeList) {
  routeList.forEach((route, index) => {
    if (route.meta && route.meta.accessFlag) {
      if (route.meta.accessFlag === true || menuCodeList.indexOf(route.meta.accessFlag) >= 0) {
        if (route.children && route.children.length > 0) {
          filterRouteAccess(route.children, menuCodeList);
        }
      } else {
        routeList.splice(index, 1);
      }
    } else {
      if (route.children && route.children.length > 0) {
        filterRouteAccess(route.children, menuCodeList);
      }
    }
  })
}

export {
  routes,
  generateMenuFromRoutes
};
