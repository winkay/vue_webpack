const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/HelloWorld.vue');

const routes = [{
  path:'/',
  hidden:true,
  redirect:function () {
    return "/HelloWorld";
  }
},
{
  path: '/HelloWorld',
  name: 'HelloWorld',
  component: HelloWorld,
  meta:{
    roles:[],
    title:"Api测试",
    icon:"fa-envelope-o"
  }
},
{
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
        m.submenu = [];
        route.children.some(child => {
          if (!child.hidden) {
            m.submenu.push({
              name:child.name,
              path:child.path,
              meta:child.meta
            })
          }
        })
      }
      menus.push(m)
    }
  })
  return menus;
}

export { routes, generateMenuFromRoutes };
