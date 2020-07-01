import useUser from '@store/users'

const { getUser } = useUser()

export async function auth(to, from, next) {
  let user = await getUser()

  if (!user) return next('/login')

  return next()
}