// 路由权限校验
import {getToken, removeToken} from '@/utils/token'
import {getRole} from '@/utils/roles'
import {asyncRoutes} from '@/router/index'
const whiteList = ['/login', '/timeout'] // no redirect whitelist
const authCheck = (router) => async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = getRole()
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // const { roles } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = asyncRoutes

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          removeToken()
          console.error(error || 'Has Error')
          next('/login')
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.includes(to.path)) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
};

export default authCheck;
