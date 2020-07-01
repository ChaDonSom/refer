import { ref, computed } from '@vue/composition-api'
import axios from 'bootstrap'

const userRef = ref({})

export default function useUser() {
  function setUser(value) {
    userRef.value = value
  }

  async function getUser() {
    if (user.value) return user.value
    return await fetchUser()
  }

  async function fetchUser() {
    let response = await axios.get('/api/user')
    setUser(response.data)
    return response.data
  }

  const user = computed(() => userRef.value)

  return {
    user,
    getUser
  }
}