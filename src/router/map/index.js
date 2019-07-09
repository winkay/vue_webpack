import demos from './demo';

const routes = [
  ...demos,
  {
    path: '*',
    hidden: true,
    redirect: function () {
      return "/helloWorld";
    }
  }
]

/**
 * 根据路由定义生成菜单数据
 */
let generateMenuFromRoutes = function (routes = []) {
  let menus = [];
  routes.some(route => {
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

export {
  routes,
  generateMenuFromRoutes
};
