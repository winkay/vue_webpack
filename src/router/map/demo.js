const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/HelloWorld.vue');
const ReverseRoutes = () => import(/* webpackChunkName: 'ReverseRoutes' */ '@/views/ReverseRoutes.vue');
const Codemirror = () => import(/* webpackChunkName: 'Codemirror' */ '@/views/demo/Codemirror.vue');

const routes = [{
  path: '/helloWorld',
  name: 'helloWorld',
  component: HelloWorld,
  meta:{
    key:"helloWorld",
    accessFlag:[],
    title:"route.apiTest",
    icon:"fa-paper-plane"
  }
}, {
  path: '/reverseRoutes',
  name: 'reverseRoutes',
  component: ReverseRoutes,
  meta:{
    key:"reverseRoutes",
    accessFlag:[],
    title:"嵌套路由",
    icon:"fa-road"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-1",
      accessFlag:[],
      title:"嵌套路由-1",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:[],
        title:"嵌套路由-1-1",
        icon:"fa-road"
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
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-2-1',
      name: 'reverseRoutes-2-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-2-1",
        accessFlag:[],
        title:"嵌套路由-2-1",
        icon:"fa-road"
      }
    }]
  }]
}, {
  path:'/codemirror',
  name: 'codemirror',
  component: Codemirror,
  meta:{
    key:"codemirror",
    accessFlag:[],
    title:"Codemirror",
    icon:"fa-code"
  }
}]

export default routes;
