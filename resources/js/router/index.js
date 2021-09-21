import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: () => import('@/js/layout/Master'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/js/pages/Dashboard')
      },
      {
        path: 'pdfs',
        name: 'PDF',
        component: () => import('@/js/pages/PDF')
      },
      {
        path: 'html',
        name: 'HTML',
        component: () => import('@/js/pages/HTML')
      },
      {
        path: 'links',
        name: 'Links',
        component: () => import('@/js/pages/Links')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: "nav-item active",
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router