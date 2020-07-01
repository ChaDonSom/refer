<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1>You're Home!</h1>
          <div class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
              <div class="form-group row">
                <div class="col-md-6 offset-md-1">
                  <button class="btn btn-primary" @click="logout">
                    Logout <!-- {{ __('Login') }} -->
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useLogin from '@store/login'
export default {
  setup(props, context) {
    const router = context.root.$router
    const { logout } = useLogin(router)
    return {
      logout
    }
  },
}
</script>

<style scoped>
</style>