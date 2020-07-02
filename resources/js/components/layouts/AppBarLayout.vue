<template>
  <div>
    <TopAppBar />
    <slot name="content" />
  </div>
</template>

<script>
import TopAppBar from '@comps/TopAppBar'
export default {
  name: 'AppBarLayout',
  components: { TopAppBar },
}
</script>

<style lang="sass" scoped>

</style>