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

  if (!user) {
    intended.value = from.path
    if (!guestRoutes.includes(to.path)) return next('/login')
  }

  return next()
}