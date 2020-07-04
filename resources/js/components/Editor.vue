<template>
  <ckeditor
      :editor="DecoupledEditor"
      v-model="data"
      :config="editorConfig"
      @ready="ckeditorReady"
      ref="ckeditor"
  />
</template>

<script>
import { ref, onMounted } from '@js/vue'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor'
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
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Font from '@ckeditor/ckeditor5-font/src/font';
import List from '@ckeditor/ckeditor5-list/src/list';
import NiceToolbar from './NiceToolbar'

export default {
  data() { return {
    DecoupledEditor,
    editor: null,
    data: "",
    editorConfig: {
      plugins: [
        Essentials,
        Paragraph,
        Autoformat,
        RemoveFormat,
        Font,
        Heading,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Code,
        CodeBlock,
        Mention,
        Link,
        List,
        Indent,
        IndentBlock,
        NiceToolbar,
      ],
      toolbar: [
        'heading', 'bold', 'italic', 'underline', 'strikethrough', '|', 
        'bulletedList', 'numberedList', '|', 
        'undo', 'redo', 'link', 'removeFormat',
      ],
      mention: {

      }
    }
  }},
  methods: {
    ckeditorReady(editor) {
      this.editor = editor

      // Insert the toolbar before the editable area.
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      )

      // console.log(this.editor.ui.view.toolbar)
      // // this.editor.ui.view.toolbar.element.style.position = 'fixed'
      // this.editor.ui.view.toolbar.element.style.bottom = '0'
      this.editor.ui.view.toolbar.set('maxWidth', window.innerWidth + 'px')
      // console.log(`window.innerWidth + 'px': `, window.innerWidth + 'px');
    }
  }
}
</script>

<style lang="scss">
.ck-editor__editable {
  //                   rounded number based on observing the toolbar in the wild
  height: calc(100vh - 38px);
}
@media (pointer: coarse) {
  .ck.ck-toolbar.ck-toolbar_grouping.ck-reset_all.ck-rounded-corners.toolbar--keyboard-top-on-mobile {
    position: fixed;
    bottom: 0;
    // left: 0;
    // right: 0;
  }
  .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se, .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw {
    top: auto;
    bottom: 100%;
  }
  .ck.ck-tooltip-text {
    bottom: 100%;
  }
  .ck.ck-tooltip.ck-tooltip_s {
    transform: unset;
  }
  .ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text::after {
    bottom: calc(-1 * var(--ck-tooltip-arrow-size));
    border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size)
  }
}
@media screen and (max-width: 599px) {
  .ck.ck-toolbar.ck-toolbar_grouping.ck-reset_all.ck-rounded-corners.toolbar--keyboard-top-on-mobile {
    position: absolute;
    bottom: 0;
    width: 100vw;
    // left: 0;
    // right: 0;
  }
  .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se, .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw {
    top: auto;
    bottom: 100%;
  }
  .ck.ck-tooltip-text {
    bottom: 100%;
  }
  .ck.ck-tooltip.ck-tooltip_s {
    transform: translateY(-100%);
  }
  .ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text::after {
    top: unset;
    bottom: calc(-1 * var(--ck-tooltip-arrow-size));
    border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
    border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size)
  }
}
</style>