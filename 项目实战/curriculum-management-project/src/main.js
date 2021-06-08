import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局导入mock下index.js文件
import './mock/index'
Vue.use(ElementUI);
//引入axios的全局配置
import http from './api/config'
//添加到vue的原型，使它变成全局变量
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
