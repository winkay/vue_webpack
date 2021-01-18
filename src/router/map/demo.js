const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/demo/HelloWorld.vue');
const NestedRoutes = () => import(/* webpackChunkName: 'NestedRoutes' */ '@/views/demo/NestedRoutes.vue');
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
  path: '/nestedRoutes',
  name: 'nestedRoutes',
  alias: '/',
  component: NestedRoutes,
  meta:{
    key:"nestedRoutes",
    accessFlag:"m.nestedRoutes",
    title:"route.nestedRoute",
    icon:"fa-road"
  },
  children:[{
    path: 'nestedRoutes-1',
    name: 'nestedRoutes-1',
    alias: '/',
    component: NestedRoutes,
    meta:{
      key:"nestedRoutes-1",
      accessFlag:"m.nestedRoutes-1",
      title:"route.nestedRoute_1",
      icon:"fa-road"
    },
    children:[{
      path: 'nestedRoutes-1-1',
      name: 'nestedRoutes-1-1',
      alias: '/',
      component: NestedRoutes,
      meta:{
        key:"nestedRoutes-1-1",
        accessFlag:"m.nestedRoutes-1-1",
        title:"route.nestedRoute_1_1",
        icon:"fa-road"
      }
    }]
  }, {
    path: 'nestedRoutes-2',
    name: 'nestedRoutes-2',
    alias: '/',
    component: NestedRoutes,
    meta:{
      key:"nestedRoutes-2",
      accessFlag:"m.nestedRoutes-2",
      title:"route.nestedRoute_2",
      icon:"fa-road"
    },
    children:[{
      path: 'nestedRoutes-2-1',
      name: 'nestedRoutes-2-1',
      alias: '/',
      component: NestedRoutes,
      meta:{
        key:"nestedRoutes-2-1",
        accessFlag:"m.nestedRoutes-2-1",
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
    title:"route.codemirror",
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
    title:"route.table",
    icon:"fa-table"
  }
}]

export default routes;
