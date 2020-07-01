require('bootstrap');

import Vue from 'vue'
import VCA, {
  ref,
  computed,
  watch,
  watchEffect,
  reactive,
  toRefs
} from '@vue/composition-api'
import VueRouter from 'vue-router'
Vue.use(VCA)
Vue.use(VueRouter)
import axios from 'axios'
window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;


export {
  axios,
  Vue,
  VueRouter,

  ref,
  computed,
  watch,
  watchEffect,
  reactive,
  toRefs
}