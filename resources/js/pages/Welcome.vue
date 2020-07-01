<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1>Welcome</h1>
          <router-link v-if="user"  class="btn btn-primary" to="/">Home</router-link>
          <router-link v-if="!user" class="btn btn-primary" to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useUser from '@store/users'
import { ref } from '@vue/composition-api'
export default {
  setup(props, context) {
    const router = context.root.$router
    const { getUser } = useUser()
    const user = ref(null)
    getUser().then(resp => user.value = resp)
    return {
      user
    }
  },
}
</script>

<style scoped>
</style>