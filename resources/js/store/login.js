import { axios, reactive, computed } from '@js/bootstrap'
import { guestRoutes, intended } from '@route/guards'

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
        await axios.get('/sanctum/csrf-cookie')
        response = await axios.post('/login', creds)
      } catch (e) {
        if (e.response && e.response.status == 419) {
          console.warn(e.response.data.message)
        }
      }
      if (intended.value) {
        if (guestRoutes.includes(intended.value)) router.replace('/')
        else router.replace(intended.value)
      }
    }

    return {
      creds,
      login,
    }
}