const HelloWorld = () => import(/* webpackChunkName: 'HelloWorld' */ '@/views/HelloWorld.vue');

const routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
},
{
  path:'*',
  redirect:function () {
    return "/";
  }
}]
export default routes;
