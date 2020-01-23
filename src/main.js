// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 配置vuex的步骤：
// 1. 运行 cnpm i vuex -S 
// 2. 导入包
import Vuex from 'vuex'
// 3. 注册vuex到vue中
Vue.use(Vuex)
// 4. new Vuex.Store() 实例，得到一个 数据仓储对象
var store = new Vuex.Store({
  state: {
    // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的
    // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
    count: 0
  }
})

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据
})