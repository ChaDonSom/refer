<template>
  <AppBarLayout>
    <template #content>
      <Editor />
    </template>
  </AppBarLayout>
</template>

<script>
import AppBarLayout from '@comps/layouts/AppBarLayout'
import Editor from '@comps/Editor'
export default {
  name: 'Home',
  components: { AppBarLayout, Editor },
  setup(props, context) {
  },
}
</script>

<style scoped>
</style>