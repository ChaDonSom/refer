import { VueRouter } from '@js/vue'

// Guards
import { auth } from '@route/guards'

// Pages
import Home  from '@pages/Home'
import Login from '@pages/Login'
import Welcome from '@pages/Welcome'
import Edit from '@pages/Edit'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
  {
    path: '/edit',
    component: Edit,
  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach(auth)

export default router