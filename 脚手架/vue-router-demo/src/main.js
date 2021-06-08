import Vue from 'vue'
import App from './App.vue'
// 第一步:引入vue-router/并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 第二步:引入对应的组件
import Home from './views/Home.vue'
import Hello from './views/Hello.vue'
import Subroute from './views/Sub-route.vue'
Vue.config.productionTip = false
// 第三步:进行配置路由(每一个路由，映射到的组件)
const routes = [
  { path: '/home', component: Home },
  { path: '/hello/:id', component: Hello },
  // *通配符表示任意路由，redirect(重定向)到/home中
  // { path: '*', redirect: '/home' },


  { path: '/subroute', component: Subroute },
  //：代表动态路由一个标识
  { path: '/subroute/:index', component: Subroute }
]
//第四步:实例化组件对象
const router = new VueRouter({
  mode: 'history',
  routes: routes//(缩写) 相当于routes:routes
})

new Vue({
  // 第五步:挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
