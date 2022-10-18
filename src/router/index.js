import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue')
  },
  {
    path: '/orderinfo',
    name: 'Orderinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Orderinfo.vue')
  },
  {
    path: '/offerta',
    name: 'Offerta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Offerta.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/order_status',
    name: 'OrderStatus',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderStatus.vue')
  },
  {
    path: '/orders_history',
    name: 'OrderHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderHistory.vue')
  },
  {
    path: '/order_information',
    name: 'OrderInfoByPin',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderInfoByPin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
