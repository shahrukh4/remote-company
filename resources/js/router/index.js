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
        component: () => import('@/js/pages/Pdfs/PDF')
      },
      {
        path: 'pdfs/add',
        name: 'Add PDF',
        meta: {editMode: 0},
        component: () => import('@/js/pages/Pdfs/AddPDF')
      },
      {
        path: 'pdfs/:id/edit',
        name: 'Edit PDF',
        meta: {editMode: 1},
        component: () => import('@/js/pages/Pdfs/AddPDF')
      },
      {
        path: 'html',
        name: 'HTML',
        component: () => import('@/js/pages/HTML/HTML')
      },
      {
        path: 'html/add',
        name: 'Add HTML',
        meta: {editMode: 0},
        component: () => import('@/js/pages/HTML/AddHTML')
      },
      {
        path: 'html/:id/edit',
        name: 'Edit HTML',
        meta: {editMode: 1},
        component: () => import('@/js/pages/HTML/AddHTML')
      },
      {
        path: 'links',
        name: 'Links',
        component: () => import('@/js/pages/Links/Links')
      },
      {
        path: 'links/add',
        name: 'Add Link',
        meta: {editMode: 0},
        component: () => import('@/js/pages/Links/AddLink')
      },
      {
        path: 'links/:id/edit',
        name: 'Edit Link',
        meta: {editMode: 1},
        component: () => import('@/js/pages/Links/AddLink')
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