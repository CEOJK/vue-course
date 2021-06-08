import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'project',
    component: () => import('../views/Project.vue'),
    children: [
      {
        path: '/',
        redirect: 'home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/Home.vue')
      },
      {
        path: '/user',
        name: 'usermanage',
        component: () => import('../views/User-Management/UserManage.vue')
      },
      {
        path: '/course',
        name: 'coursemanage',
        component: () => import('../views/Course-management/CourseManage.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/other/Page1.vue'),
      }, {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/other/Page2.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
