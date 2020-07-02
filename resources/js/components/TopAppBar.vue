<template>
  <nav class="navbar fixed-top navbar-light bg-transparent">
    <div class="nav-item dropdown ml-auto">
      <a href="#" id="navbarDropdownMenuLink" role="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink" :style="{ display: showMenu ? 'block' : 'none'}">
        <a class="dropdown-item" href="#" @click="logout" id="logout-button">Logout</a>
      </div>
    </div>
  </nav>  
</template>

<script>
import { ref, watchEffect } from '@js/vue'
import useLogin from '@store/login'
export default {
  setup(props, context) {
    const router = context.root.$router
    const { logout } = useLogin(router)
    const showMenu = ref(false)
    const toggleMenu = () => showMenu.value = !showMenu.value
    const scrimListener = event => {
      if (!event.target.closest('#logout-button')) showMenu.value = false
    }
    watchEffect(() => {
      if (showMenu.value) setTimeout(() => document.addEventListener('click', scrimListener))
      else setTimeout(() => document.removeEventListener('click', scrimListener))
    })
    return {
      logout,
      showMenu,
      toggleMenu
    }
  }
}
</script>

<style lang="sass" scoped>

</style>