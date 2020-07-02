import axios from 'axios' 
import { reactive } from '@js/vue'
import { guestRoutes, intended } from '@route/guards'
import useUser from '@store/users'

// State
const creds = reactive({
  email: '',
  password: '',
  remember: '',
})

export default function useLogin(router) {
    // Mutations

    // Getters

    // Actions
    const login = async event => {
      event.preventDefault()
      let response
      try {
        // await axios.get('/sanctum/csrf-cookie')
        response = await axios.post('/login', creds)
      } catch (e) {
        if (e.response && e.response.status == 419) {
          console.warn(e.response.data.message)
        }
      }
      if (intended.value && !guestRoutes.includes(intended.value)) router.replace(intended.value)
      else router.replace('/')
    }

    const logout = async () => {
      const { setUser } = useUser()
      try {
        let response = await axios.post('/logout')
      } catch (e) {
        if (e.response && e.response.status == 419) {
          console.warn(e.response.data.message)
        }
      }
      setUser(null)
      router.replace('/welcome')
    }

    return {
      creds,
      login,
      logout,
    }
}