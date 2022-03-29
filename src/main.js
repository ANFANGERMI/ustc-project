import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'
import './assets/css/mystyle.css'
import router from './router'
import store from './store'
// import echarts from 'echarts'
Vue.use(ElementUI)
Vue.use(VueCodemirror)
// Vue.use(echarts)
 /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


