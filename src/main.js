import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(ElementUI);

//test mac upload

//全局路由勾子
router.beforeEach((to, from, next) => {
  console.log("beforeEach"+to+from)
  next()
})
router.beforeResolve((to, from, next) => {
  console.log("beforeResolve"+to+from)
  next()

})
router.afterEach((to, from) => {
  console.log("afterEach"+to+from)

})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
