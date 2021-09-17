import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routers from './router'
Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routers
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
