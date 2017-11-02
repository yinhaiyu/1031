import Vue from 'vue'
import App from './App/App'
import router from './router'
import FastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
<<<<<<< HEAD
Vue.use(VueAwesomeSwiper);
=======
>>>>>>> hahaha
FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
  
