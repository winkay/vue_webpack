import Layout from '@/components/layout/Index.vue';
const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/demo/HelloWorld.vue');
const ReverseRoutes = () => import(/* webpackChunkName: 'ReverseRoutes' */ '@/views/demo/ReverseRoutes.vue');
const Codemirror = () => import(/* webpackChunkName: 'Codemirror' */ '@/views/demo/Codemirror.vue');
const Table = () => import(/* webpackChunkName: 'Table' */ '@/views/demo/Table.vue');

const routes = [{
  path: '/helloWorld',
  component: Layout,
  redirect: '/helloWorld/index',
  meta:{
    key:"helloWorld",
    accessFlag:['0', '1'],
    title:"route.apiTest",
    icon:"fa-paper-plane"
  },
  children:[{
    path: 'index',
    name: 'helloWorld',
    component: HelloWorld
  }]
}, {
  path: '/reverseRoutes',
  name: 'reverseRoutes',
  component: Layout,
  redirect:'/reverseRoutes/reverseRoutes-1',
  meta:{
    key:"reverseRoutes",
    accessFlag:['0', '1'],
    title:"route.nestedRoute",
    icon:"fa-road"
  },
  children:[{
    path: 'reverseRoutes-1',
    name: 'reverseRoutes-1',
    component: ReverseRoutes,
    redirect:'/reverseRoutes/reverseRoutes-1/reverseRoutes-1-1',
    meta:{
      key:"reverseRoutes-1",
      accessFlag:['0'],
      title:"route.nestedRoute_1",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:['0'],
        title:"route.nestedRoute_1_1",
        icon:"fa-road"
      }
    }]
  }, {
    path: 'reverseRoutes-2',
    name: 'reverseRoutes-2',
    component: ReverseRoutes,
    redirect:'/reverseRoutes/reverseRoutes-2',
    meta:{
      key:"reverseRoutes-2",
      accessFlag:['1'],
      title:"route.nestedRoute_2",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-2-1',
      name: 'reverseRoutes-2-1',
      component: ReverseRoutes,
      redirect:'/reverseRoutes/reverseRoutes-2-1',
      meta:{
        key:"reverseRoutes-2-1",
        accessFlag:['1'],
        title:"route.nestedRoute_2_1",
        icon:"fa-road"
      }
    }]
  }]
}, {
  path:'/codemirror',
  component: Layout,
  redirect: '/codemirror/index',
  meta:{
    key:"codemirror",
    accessFlag:['0', '1'],
    title:"Codemirror",
    icon:"fa-code"
  },
  children:[{
    path: 'index',
    name: 'codemirror',
    component: Codemirror
  }]
}, {
  path:'/table',
  component: Layout,
  redirect: '/table/index',
  meta:{
    key:"table",
    accessFlag:['0', '1'],
    title:"Table",
    icon:"fa-table"
  },
  children:[{
    path: 'index',
    name: 'table',
    component: Table
  }]
}]

export default routes;
