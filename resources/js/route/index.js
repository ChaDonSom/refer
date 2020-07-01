import { VueRouter } from '@js/bootstrap'

// Guards
import { auth } from '@route/guards'

// Pages
import Home from '@pages/Home'
import Login from '@pages/Login'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach(auth) //

export default router