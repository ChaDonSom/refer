<template>
  <ckeditor :editor="ClassicEditor" v-model="data" :config="editorConfig" />
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() { return {
    ClassicEditor,
    data: "",
    editorConfig: {},
  }}
}
</script>

<style>
.ck-editor__editable {
  min-height: 500px;
}
</style>