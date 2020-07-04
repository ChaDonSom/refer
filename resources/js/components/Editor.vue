<template>
  <ckeditor :editor="editor" v-model="data" :config="editorConfig" ref="ckeditor" />
</template>

<script>
import { ref, onMounted } from '@js/vue'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Mention from '@ckeditor/ckeditor5-mention/src/mention'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

export default {
  data() { return {
    editor: ClassicEditor,
    data: "",
    editorConfig: {
      plugins: [
        Essentials,
        Paragraph,
        RemoveFormat,
        Heading,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        Mention,
        Link,
        Indent,
        IndentBlock,
      ],
      toolbar: [
        'heading', 'bold', 'italic', 'underline', 'strikethrough', 'link', '|', 'removeFormat', '|', 'undo', 'redo'
      ],
      mention: {

      }
    }
  }},
}
</script>

<style>
/* .ck-editor__editable {
  height: 50vh;
} */
</style>