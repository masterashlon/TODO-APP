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
    redirect: '/login',
    meta: {
      hideAsterisk: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      hideAsterisk: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      hideAsterisk: true
    }
  },
  {
    path: '/completati',
    name: 'completed',
    component: CompletedView,
    meta: {
      hideAsterisk: true
    }

  },
  {
    path: '/albo',
    name: 'albo',
    component: AlboView,
    meta: {
      hideAsterisk: true
    }
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
