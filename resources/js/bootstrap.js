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
  createApp,
} from '@vue/composition-api'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VCA)
Vue.use(VueRouter)
window.axios = axios

__webpack_public_path__ = 'http://penguin.linux.test:8080/'

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.get('/sanctum/csrf-cookie')


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
  createApp,
}