import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Firstlevel = () => import('../views/First-level.vue')
const Twopoles1 = () => import('../views/Two-poles-1.vue')
const Twopoles2 = () => import('../views/Two-poles-2.vue')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/firstlevel',
    name: 'firstlevel',
    component: Firstlevel,
    children: [
      {
        path: 'twopoles1',
        name: 'twopoles1',
        component: Twopoles1
      }, {
        path: 'twopoles2',
        name: 'twopoles2',
        component: Twopoles2
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
