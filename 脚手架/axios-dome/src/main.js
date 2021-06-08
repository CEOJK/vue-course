import Vue from 'vue'
import App from './App.vue'
// 引入axios
import axios from "axios"
// 挂载axios
Vue.prototype.$axios = axios
console.log(Vue.prototype)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
