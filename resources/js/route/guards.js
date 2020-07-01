import useUser from '@store/users'

const { getUser } = useUser()

const guestRoutes = [
  '/login',
  '/welcome',
  '/register',
  '/forgot-password',
]

export async function auth(to, from, next) {
  let user = await getUser()

  console.log('user: ', user);
  if (!user) {
    if (!guestRoutes.includes(to.path)) return next('/login')
  }

  return next()
}