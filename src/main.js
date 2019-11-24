import Vue from 'vue'
import VueRecourse from 'vue-resource'
import App from './App.vue'

Vue.use(VueRecourse)
Vue.http.options.root = 'https://vuejs-http-a2b48.firebaseio.com/';
Vue.http.interceptors.push((req, next)=>{
  console.log(req);
  if(req.method == 'POST'){
    req.method = 'PUT';
  }
  next(response =>{
    response.json = () =>{
        return { message:response.body }
      };
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
