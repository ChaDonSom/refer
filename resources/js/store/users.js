import { axios, ref, computed } from '@js/bootstrap'

// State
const userRef = ref(null)

export default function useUser() {
  // Mutations
  function setUser(value) {
    userRef.value = value
  }

  // Getters
  const user = computed(() => userRef.value)

  // Actions
  async function getUser() {
    if (user.value) return user.value
    return await fetchUser()
  }

  async function fetchUser() {
    try {
      let response = await axios.get('/api/user')
      setUser(response.data)
    } catch (e) {
      setUser(null)
    }
    return user.value
  }

  return {
    user,
    getUser,
    setUser,
  }
}