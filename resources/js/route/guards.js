import useUser from '@store/users'
import { ref } from '@vue/composition-api'

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
  if (!user) {
    intended.value = from.path
    if (!isAGuestRoute) return next('/login')
  } else {
    if (isAGuestRoute) return next('/')
  }

  return next()
}