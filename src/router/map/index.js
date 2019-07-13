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

function filterRouteAccess(routeList, menuCodeList = []) {
  for (let index = routeList.length - 1; index >= 0; index--) {
    const route = routeList[index];
    if (route.meta && route.meta.accessFlag) {
      if (menuCodeList.indexOf(route.meta.accessFlag) >= 0) {
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
  }
}
filterRouteAccess(routes, Vue.menuCodeList);
export {
  routes,
  generateMenuFromRoutes
};
