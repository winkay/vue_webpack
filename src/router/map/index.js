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
  name: 'helloWorld',
  component: HelloWorld,
  meta:{
    key:"helloWorld",
    accessFlag:[],
    title:"route.apiTest",
    icon:"fa-envelope-o"
  }
}, {
  path: '/reverseRoutes',
  name: 'reverseRoutes',
  component: ReverseRoutes,
  meta:{
    key:"reverseRoutes",
    accessFlag:[],
    title:"嵌套路由",
    icon:"fa-envelope-o"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-1",
      accessFlag:[],
      title:"嵌套路由-1",
      icon:"fa-envelope-o"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:[],
        title:"嵌套路由-1-1",
        icon:"fa-envelope-o"
      }
    }]
  }, {
    path: 'reverseRoutes-2',
    name: 'reverseRoutes-2',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-2",
      accessFlag:[],
      title:"嵌套路由-2",
      icon:"fa-envelope-o"
    },
    children:[{
      path: 'reverseRoutes-2-1',
      name: 'reverseRoutes-2-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-2-1",
        accessFlag:[],
        title:"嵌套路由-2-1",
        icon:"fa-envelope-o"
      }
    }]
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
