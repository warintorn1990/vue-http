import Vue from 'vue'
import VueRecourse from 'vue-resource'
import App from './App.vue'

Vue.use(VueRecourse)

new Vue({
  el: '#app',
  render: h => h(App)
})
