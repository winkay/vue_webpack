import Layout from '@/components/layout/Index.vue';
const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/demo/HelloWorld.vue');
const ReverseRoutes = () => import(/* webpackChunkName: 'ReverseRoutes' */ '@/views/demo/ReverseRoutes.vue');
const Codemirror = () => import(/* webpackChunkName: 'Codemirror' */ '@/views/demo/Codemirror.vue');
const Table = () => import(/* webpackChunkName: 'Table' */ '@/views/demo/Table.vue');

const routes = [{
  path: '/',
  name: 'helloWorld',
  component: Layout,
  redirect:'/helloWorld',
  children:[{
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld,
    meta:{
      key:"helloWorld",
      accessFlag:[0, 1],
      title:"route.apiTest",
      icon:"fa-paper-plane"
    }
  }]
}, {
  path: '/',
  name: 'reverseRoutes',
  component: Layout,
  redirect:'/reverseRoutes/reverseRoutes-1',
  meta:{
    key:"reverseRoutes",
    accessFlag:[0, 1],
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
      accessFlag:[0],
      title:"route.nestedRoute_1",
      icon:"fa-road"
    },
    children:[{
      path: 'reverseRoutes-1-1',
      name: 'reverseRoutes-1-1',
      component: ReverseRoutes,
      meta:{
        key:"reverseRoutes-1-1",
        accessFlag:[0],
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
      accessFlag:[1],
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
        accessFlag:[1],
        title:"route.nestedRoute_2_1",
        icon:"fa-road"
      }
    }]
  }]
}, {
  path:'/',
  name: 'codemirror',
  component: Layout,
  redirect:'/codemirror',
  children:[{
    path: '/codemirror',
    name: 'codemirror',
    component: Codemirror,
    meta:{
      key:"codemirror",
      accessFlag:[0, 1],
      title:"Codemirror",
      icon:"fa-code"
    }
  }]
}, {
  path:'/',
  name: 'table',
  component: Layout,
  redirect:'/table',
  children:[{
    path: '/table',
    name: 'table',
    component: Table,
    meta:{
      key:"table",
      accessFlag:[0, 1],
      title:"Table",
      icon:"fa-table"
    }
  }]
}]

export default routes;
