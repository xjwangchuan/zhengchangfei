import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Main = () => import('@/Pages/main/Main')
const Fxl = () => import('@/Pages/main/Fxl')
const Option = ()=>import('@/Pages/option/Option')
const Flight =()=>import('@/Pages/flight/Flight')
const FlightSearch = () => import('@/Pages/flight/FlightSearch')
const FlightConcern = () => import('@/Pages/flight/FlightConcern')
const FlightDetail = () => import('@/Pages/flight/FlightDetail')
const FlightFxl = () => import('@/Pages/flight/FlightFxl')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '',
    redirect: '/main',
  },{
    path: '/main',
    name:'main',
    component: Main,
  },{
    path: '/option',
    name:'option',
    component: Option,
  },{
    path: '/flight',
    name:'flight',
    component:Flight,
  },
  {
    path: '/fxl',
    name: 'fxl',
    component: Fxl,
  },
  {
    path: '/FlightSearch',
    name: 'FlightSearch',
    component: FlightSearch,
    },
  {
    path: '/FlightConcern',
    name: 'FlightConcern',
    component: FlightConcern,
    },
  {
    path: '/FlightDetail',
    name: 'FlightDetail',
    component: FlightDetail,
    },
  {
    path: '/FlightFxl',
    name: 'FlightFxl',
    component: FlightFxl,
    }]
})
