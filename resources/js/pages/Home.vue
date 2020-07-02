<template>
  <AppBarLayout>
    <template #content>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1>You're Home!</h1>
            <div class="card">
              <div class="card-header">Dashboard</div>
              <div class="card-body">
                <div class="row justify-content-center">
                  <router-link class="btn btn-primary mx-auto" to="/edit">
                    Edit <!-- {{ __('Login') }} -->
                  </router-link>
                  <router-link class="btn btn-primary mx-auto" to="/view">
                    View <!-- {{ __('Login') }} -->
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppBarLayout>
</template>

<script>
import AppBarLayout from '@comps/layouts/AppBarLayout'
export default {
  name: 'Home',
  components: { AppBarLayout },
  setup(props, context) {
  },
}
</script>

<style scoped>
</style>