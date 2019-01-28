import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles/store/:storeId',
      name: 'articles-store',
      component: () => import('./views/ArticlesStore.vue')
    },
    {
      path: '/articles',
      name: 'all-articles',
      component: () => import('./views/Articles.vue')
    },
    {
      path: '/store/:storeId',
      name: 'store-detail',
      component: () => import('./views/StoreDetail.vue')
    }
  ]
})
