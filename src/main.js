import Vue from 'vue'
import App from './App/App'
import router from './router'
import FastClick from 'fastclick';
const IScroll = require ('./utils/iscroll-probe.js')
import store from './vuex';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);


FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
  
