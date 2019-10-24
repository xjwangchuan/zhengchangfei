// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import router from './router'
import store from './store'
import fastclick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import echarts from 'echarts'
import './common/js/rem.js';
import './vant.js';
import './common/style/index.styl';
import 'swiper/dist/css/swiper.css'
// import { Icon } from 'vant';
// Vue.use(Icon);

Vue.config.productionTip = false
// 移动端点击300毫秒延迟
fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios=axios;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

// 添加请求拦截器，在请求头中加token

// axios.interceptors.request.use(
//   config => {
//     // if (localStorage.getItem('Authorization')) {
//     config.headers.Authorization ="87394f1aa0824c5cac62d68726af7dbe@*@bAnT1DU7cnSK1MyR13mZFg";
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });

// // 设置响应拦截器
// axios.interceptors.response.use(res => {
//   // 对结果进行处理
//   if (res.data.res_code === 401) {
//     // 跳转登录
//     router.replace('/flight')
//     // 删除token
//     // localStorage.removeItem('token')
//   }
//   return res
// }, err => {
//   // 如果是正常接口，会走err，err.response.status值为401 进行跳转及删除token的操作
// })