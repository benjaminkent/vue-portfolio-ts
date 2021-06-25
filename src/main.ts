import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-pro/css/all.css'
import VueScrollTo from 'vue-scrollto'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
