import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 一级路由
const Mainpakg = () => import('../views/Mianpakg.vue')
const Login = () => import('../views/Login.vue')
// 二级路由
const About = () => import('../views/About.vue')
const Home = () => import('../views/Home.vue')
// 三级路由
const Childroute1 = () => import('../views/Child-route1.vue')
const Childroute2 = () => import('../views/Child-route2.vue')
const Childroute3 = () => import('../views/Child-route3.vue')
// 四级路由
const Some1 = () => import('../views/some/some1.vue')
const Some2 = () => import('../views/some/some2.vue')
const routes = [
  {
    path: '/',
    redirect: '/mainpakg'
  },
  {
    path: '/mainpakg',
    component: Mainpakg,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        children: [
          {
            path: '',
            redirect: 'child-route1'
          },

          {
            path: 'child-route1',
            name: 'child-route1',
            component: Childroute1,
          },
          {
            path: 'child-route2',
            name: 'child-route2',
            component: Childroute2,
          },
          {
            path: 'child-route3',
            name: 'child-route3',
            component: Childroute3,
            children: [
              { path: 'some1', name: 'some1', component: Some1 },
              { path: 'some2', name: 'some2', component: Some2 }
            ]
          }
        ]
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        //路由独享守卫
        beforeEnter: (to, from, next) => {
          console.log(to)
        }
      }
    ]
  },
  { path: '/login', name: 'login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局前置的导航守卫
// router.beforeEach((to, from, next) => {
//   // 	/* 
//   // 	    to ：路由将要跳转的路径信息，信息是包含在对象里
//   // 		from：路径跳转前的路径信息，信息是包含在对象里
//   // 		next ：路由控制的参数，常用的有next() 和next(falsh)
//   // 		next函数说明
//   // 			next('路径') 
//   // 			next({path:'路径'})
//   // 	 */
//   if (to.name !== 'login') {//验证是否登陆
//     if (window.username && window.userpass) {
//       next()
//     } else {
//       alert('请先登陆')
//       next('/login')
//     }
//   }
//   // 	// console.log(to)
//   // 	// console.log(from)
//   // 	// console.log(next)
//   // 	// next('/mainpage')
//   next()
// })
//全局后置的导航守卫
// 全局后置守卫
// router.afterEach((to, from) => {
//   // to:跳转到的目标路由对象
//   // from ：离开路由，之前显示的对象
//   // console.log(to)
//   // console.log(from)
//   console.log('欢迎:' + window.username + '主页面')
// })
export default router
