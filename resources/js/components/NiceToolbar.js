import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

export default class extends Plugin {
  // constructor( editor ) {
  //   console.log(editor)
  // }

  init() {
    // console.log(this.editor.ui.view.toolbar._behavior)
    let toolbar = this.editor.ui.view.toolbar

    // console.log(toolbar.template)
    toolbar.extendTemplate({
      attributes: {
        // maybe bind this so we only apply it after setting the maxwidth?
        // class: "toolbar--keyboard-top-on-mobile",
        'data-toolbar': true,
      }
    })

    let setToolbarWidthToWindowWidth = () => {
      // console.log(toolbar._behavior.viewElement)
      // console.log(!toolbar._behavior.viewElement.ownerDocument.body.contains(toolbar._behavior.viewElement))
      // console.log(!toolbar._behavior.viewElement.offsetParent)
      // console.log('setting maxwidth to ' + window.innerWidth + 'px')
      toolbar.set('maxWidth', window.innerWidth + 'px')
      // toolbar._behavior._updateGrouping()
    }
    let timeout
    let callToolbarWidthSetter = () => {
      clearTimeout(timeout)
      timeout = setTimeout(setToolbarWidthToWindowWidth, 100)
    }
    callToolbarWidthSetter()
    toolbar.listenTo(window, 'resize', callToolbarWidthSetter)
    toolbar.listenTo(window, 'orientationchange', callToolbarWidthSetter)
  }
}