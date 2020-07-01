require('bootstrap');

import Vue from 'vue'
import VCA, {
  ref,
  computed,
  watch,
  watchEffect,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
} from '@vue/composition-api'
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VCA)
Vue.use(VueRouter)
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
  toRefs,
  onMounted,
  onUnmounted,
}