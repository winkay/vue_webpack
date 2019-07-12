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
    accessFlag:"m.helloWorld",
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
    accessFlag:"m.reverseRoutes",
    title:"route.nestedRoute",
    icon:"fa-road"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    alias: '/',
    component: ReverseRoutes,
    meta:{
      key:"reverseRoutes-1",
      accessFlag:"m.reverseRoutes-1",
      title:"route.nestedRoute_1",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      alias: '/',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:"m.reverseRoutes-1-1",
        title:"route.nestedRoute_1_1",
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
      accessFlag:"m.reverseRoutes-2",
      title:"route.nestedRoute_2",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-2-1',
      name: 'reverseRoutes-2-1',
      alias: '/',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-2-1",
        accessFlag:"m.reverseRoutes-2-1",
        title:"route.nestedRoute_2_1",
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
    accessFlag:"m.codemirror",
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
    accessFlag:"m.table",
    title:"Table",
    icon:"fa-table"
  }
}]

export default routes;
