<template>
  <ckeditor :editor="editor" v-model="data" :config="editorConfig" ref="ckeditor" />
</template>

<script>
import { ref, onMounted } from '@js/vue'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
// import Mention from '@ckeditor/ckeditor5-mention/src/mention'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import ContextualBalloon from '@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon'

export default {
  data() { return {
    editor: ClassicEditor,
    data: "",
    editorConfig: {
      plugins: [
        Essentials,
        Paragraph,
        Bold,
        Italic,
        // ContextualBalloon,
        // Mention,
      ],
      toolbar: [
        'bold', 'italic'
      ],
    }
  }},
}
</script>

<style>
/* .ck-editor__editable {
  height: 50vh;
} */
</style>