const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/HelloWorld.vue');
const ReverseRoutes = () => import(/* webpackChunkName: 'ReverseRoutes' */ '@/views/ReverseRoutes.vue');

const routes = [{
  path:'/',
  hidden:true,
  redirect:function () {
    return "/helloWorld";
  }
}, {
  path: '/helloWorld',
  name: 'HelloWorld',
  key:"HelloWorld",
  component: HelloWorld,
  meta:{
    accessFlag:[],
    title:"Api测试",
    icon:"fa-envelope-o"
  }
}, {
  path: '/reverseRoutes',
  name: 'reverseRoutes',
  key:"reverseRoutes",
  component: ReverseRoutes,
  meta:{
    accessFlag:[],
    title:"嵌套路由",
    icon:"fa-envelope-o"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    key:"reverseRoutes-1",
    component: ReverseRoutes,
    meta:{
      accessFlag:[],
      title:"嵌套路由-1",
      icon:"fa-envelope-o"
    }
  }, {
    path: 'reverseRoutes-2',
    name: 'reverseRoutes-2',
    key:"reverseRoutes-2",
    component: ReverseRoutes,
    meta:{
      accessFlag:[],
      title:"嵌套路由-2",
      icon:"fa-envelope-o"
    }
  }]
}, {
  path:'*',
  hidden:true,
  redirect:function () {
    return "/";
  }
}]

/**
 * 根据路由定义生成菜单数据
 */
let generateMenuFromRoutes = function(routes = []) {
  let menus = [];
  routes.some(route => {
    if (!route.hidden) {
      let m = {
        name:route.name,
        key:route.key,
        path:route.path,
        meta:route.meta
      };
      if (route.children) {
        m.subMenus = generateMenuFromRoutes(route.children)
      }
      menus.push(m)
    }
  })
  return menus;
}

export { routes, generateMenuFromRoutes };
