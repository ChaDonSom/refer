import { VueRouter } from '@js/bootstrap'

// Guards
import { auth } from '@route/guards'

// Pages
import Home  from '@pages/Home'
import Login from '@pages/Login'
import Welcome from '@pages/Welcome'

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
  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach(auth)

export default router