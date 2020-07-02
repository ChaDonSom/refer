<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <h1>Hi, you need to log in.</h1>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form method="POST" @submit="login">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">
                    Email Address <!-- {{ __('E-Mail Address') }} -->
                  </label>
                  <div class="col-md-6">
                    <input 
                        v-model="creds.email"
                        id="email" 
                        type="email" 
                        class="form-control" 
                        name="email" 
                        required 
                        autocomplete="email" 
                        autofocus
                    >
                      <!-- value="{{ old('email') }}" -->
                      <!-- @error('email') is-invalid @enderror -->
                    <span v-if="false /* @error('email') */" class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">
                    Password <!-- {{ __('Password') }} -->
                  </label>
                  <div class="col-md-6">
                    <input 
                        v-model="creds.password"
                        id="password" 
                        type="password" 
                        class="form-control" 
                        name="password" 
                        required 
                        autocomplete="current-password"
                    >
                      <!-- @error('password') is-invalid @enderror -->
                    <span v-if="false /* @error('password') */" class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                    </span>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <input 
                          v-model="creds.remember"
                          class="form-check-input" 
                          type="checkbox" 
                          name="remember" 
                          id="remember"
                      >
                        <!-- {{ old('remember') ? 'checked' : '' }} -->
                      <label class="form-check-label" for="remember">
                        Remember Me <!-- {{ __('Remember Me') }} -->
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Login <!-- {{ __('Login') }} -->
                    </button>
                    <a v-if="false /* @if (Route::has('password.request')) */" class="btn btn-link">
                      <!-- href="{{ route('password.request') }}" -->
                      Forgot Your Password? <!-- {{ __('Forgot Your Password?') }} -->
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { axios } from 'axios'
import useLogin from '@store/login'
export default {
  name: 'Login',
  setup(props, context) {
    const router = context.root.$router
    const {
      creds,
      login,
    } = useLogin(router)

    return {
      creds,
      login,
    }
  }
}
</script>

<style scoped>

</style>