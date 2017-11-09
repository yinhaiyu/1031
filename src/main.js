import Vue from 'vue'
import App from './App/App.vue'
import router from './router'
import FastClick from 'fastclick';
const IScroll = require ('./utils/iscroll-probe.js')
import store from './vuex';



FastClick.attach(document.body);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
