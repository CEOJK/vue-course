import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 声明一个 container 模块
const container = {
  state: () => ({
    msg: '模块'
  }),
  mutations: {},
  actions: {},
  getters: {}
}
const store = new Vuex.Store({
  state: {
    count: 1,
    stu: {
      name: '小e', sex: '女'
    },
    msg: [
      { name: '小明', age: 18 },
      { name: '晓晓', age: 19 },
      { name: '小q', age: 20 },
      { name: '刘峰', age: 17 }

    ]
  },
  mutations: {
    add(state) {
      state.count++
    },
    increment1(state, payload) {
      /* 
      state参数：状态
      payload：载荷（携带的参数）
      state === this
     */
      state.count += payload.aa
    },
    increment2(state, payload) {
      state.count += payload
    },
    updateStu(state, name) {
      // state.stu.name="茶茶"
      Vue.set(state.stu, 'name', '小明')
      Vue.set(state.stu, 'sex', '男')
    },
  },
  actions: {
    asIncrement(context, payload) {
      //异步触发mutations函数
      setTimeout(() => {
        // 传递载荷参数
        context.commit('increment2', payload.num)
      }, 2000)
      console.log(this)
    }
  },
  //只有当状态发生改变时才会重新被计算（类似于计算属性）
  getters: {
    //没有传递参数，state就是状态集合
    getage18(state) {
      return state.msg.filter(u => {
        return u.age > 18
      })
    },
    getUserAge(state, getter) {
      return (num) => {
        return state.msg.filter(u => {
          return u.age > num
        })
      }
    },
    getuser2(state, getter) {
      return getter.getUserAge.length;
    }
  },
  modules: {
    //
    container
  }
})

export default store