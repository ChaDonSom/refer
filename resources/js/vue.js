import Vue from 'vue'
import VueCompositionApi, {
  ref,
  reactive,
  computed,
  readonly,
  watch,
  watchEffect,
  toRefs,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
} from '@vue/composition-api'
import VueRouter from 'vue-router'
import CKEditor from '@ckeditor/ckeditor5-vue'

Vue.use(VueCompositionApi)
Vue.use(VueRouter)
Vue.use(CKEditor)

export {
  Vue,
  VueRouter,

  ref,
  reactive,
  computed,
  readonly,
  watch,
  watchEffect,
  toRefs,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
}