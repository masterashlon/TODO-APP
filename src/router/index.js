import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompletedView from '../views/CompletedView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundPageView from '../views/NotFoundPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/COMPLETED',
    name: 'completed',
    component: CompletedView,
    props: true

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '*',
    name: 'page404',
    component: NotFoundPageView
  }
]

const router = new VueRouter({
  routes,
  history
})

export default router
