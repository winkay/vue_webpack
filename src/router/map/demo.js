const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/HelloWorld.vue');
const ReverseRoutes = () => import(/* webpackChunkName: 'ReverseRoutes' */ '@/views/ReverseRoutes.vue');
const Codemirror = () => import(/* webpackChunkName: 'Codemirror' */ '@/views/demo/Codemirror.vue');
const Table = () => import(/* webpackChunkName: 'Table' */ '@/views/demo/Table.vue');

const routes = [{
  path: '/helloWorld',
  name: 'helloWorld',
  alias: '/',
  component: HelloWorld,
  meta:{
    key:"helloWorld",
    accessFlag:"",
    title:"route.apiTest",
    icon:"fa-paper-plane"
  }
}, {
  path: '/reverseRoutes',
  name: 'reverseRoutes',
  alias: '/',
  component: ReverseRoutes,
  meta:{
    key:"reverseRoutes",
    accessFlag:"",
    title:"嵌套路由",
    icon:"fa-road"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    alias: '/',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-1",
      accessFlag:"",
      title:"嵌套路由-1",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      alias: '/',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:"",
        title:"嵌套路由-1-1",
        icon:"fa-road"
      }
    }]
  }, {
    path: 'reverseRoutes-2',
    name: 'reverseRoutes-2',
    alias: '/',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-2",
      accessFlag:"",
      title:"嵌套路由-2",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-2-1',
      name: 'reverseRoutes-2-1',
      alias: '/',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-2-1",
        accessFlag:"",
        title:"嵌套路由-2-1",
        icon:"fa-road"
      }
    }]
  }]
}, {
  path:'/codemirror',
  name: 'codemirror',
  alias: '/',
  component: Codemirror,
  meta:{
    key:"codemirror",
    accessFlag:"",
    title:"Codemirror",
    icon:"fa-code"
  }
}, {
  path:'/table',
  name: 'table',
  alias: '/',
  component: Table,
  meta:{
    key:"table",
    accessFlag:"",
    title:"Table",
    icon:"fa-table"
  }
}]

export default routes;
