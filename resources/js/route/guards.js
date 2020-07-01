import useUser from '@store/users'

const { user, getUser } = useUser()

export function auth(to, from, next) {
  let user = getUser()

  if (!user) return next('/login')

  next()
}