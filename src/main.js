// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick';
import './common/js/rem.js';
import './vant.js';
// import { Icon } from 'vant';
// Vue.use(Icon);

Vue.config.productionTip = false
// 移动端点击300毫秒延迟
fastclick.attach(document.body);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
