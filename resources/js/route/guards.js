import useUser from '@store/users'
import { ref } from '@js/vue'

const { getUser } = useUser()

export const guestRoutes = [
  '/login',
  '/welcome',
  '/register',
  '/forgot-password',
]

export const intended = ref('')

export async function auth(to, from, next) {
  let user = await getUser()

  let isAGuestRoute = guestRoutes.includes(to.path)
  let isGuest = !user
  if (isGuest && !isAGuestRoute) {
    intended.value = from.path
    return next('/welcome')
  }
  if (user && isAGuestRoute) return next('/')

  return next()
}