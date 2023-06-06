import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompletedView from '../views/CompletedView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundPageView from '../views/NotFoundPageView.vue'
import AlboView from '../views/AlboView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/completati',
    name: 'completed',
    component: CompletedView

  },
  {
    path: '/albo',
    name: 'albo',
    component: AlboView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      hideAsterisk: true
    }
  },
  {
    path: '*',
    name: 'page404',
    component: NotFoundPageView,
    meta: {
      hideAsterisk: true
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes,
})

export default router
