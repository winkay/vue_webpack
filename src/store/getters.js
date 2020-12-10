const getters = {
  role: state => state.user.role,
  username: state => state.user.name,
  allRoutes: state => state.permission.routes,
  asyncRouters: state => state.permission.asyncRouters
}
export default getters
