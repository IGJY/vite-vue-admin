import router from './router/index'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import { NextLoading } from '@/utils/loading'

NProgress.configure({ showSpinner: false })

const notRedirect = ['/login'] // 不重定向白名单

router.beforeEach((to: any, from: any, next: any) => {
  // 1 判断是否有token
  // 1.1 判断是否有menus(动态路由。页面刷新后vuex会重置)
  // 1.1.1 重新获取动态路由表
  // 1.1.2 直接跳转 next()

  // 1.2 判断是否在重定向的白名单
  // 1.2.1 重定向到登录页
  // 1.2.2 留在当前页

  if (store.getters.getToken) {
    if (store.getters.getMenus.length == 0) {

      store.dispatch('userInfo')
        .then((res: any) => {
          next({ ...to, replace: true })
          NProgress.done()
        })
    } else {
      next()
      NProgress.done()
    }
  } else {
    if (notRedirect.indexOf(to.path) != -1) {
      setTimeout(() => {
        next()
        NProgress.done()
      }, 1000)
    } else {
      setTimeout(() => {
        next('/login')
        NProgress.done()
      }, 1000)
    }

  }
})

router.afterEach(() => {
  NextLoading.done()
  NProgress.done() // 结束Progress
})
