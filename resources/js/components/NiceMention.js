import Plugin from '@ckeditor/ckeditor5-core/src/plugin'

export default class extends Plugin {
  // constructor( editor ) {
  //   console.log(editor)
  // }

  init() {
    // console.log(this.editor.ui.view)
    let toolbar = this.editor.ui.view.toolbar
    let editable = this.editor.ui.view.editable

    // editable.set('height')
    // editable.extendTemplate({
    //   attributes: {
    //     style: {
    //       height: editable.bindTemplate.to('height')
    //     }
    //   }
    // })
    // console.log(toolbar.template)
    toolbar.extendTemplate({
      attributes: {
        class: "toolbar--keyboard-top-on-mobile",
      }
    })

    let setToolbarWidthToWindowWidth = () => {
      // console.log(toolbar._behavior.viewElement.getBoundingClientRect().height)
      // console.log(!toolbar._behavior.viewElement.ownerDocument.body.contains(toolbar._behavior.viewElement))
      // console.log(!toolbar._behavior.viewElement.offsetParent)
      // console.log('setting maxwidth to ' + window.innerWidth + 'px')

      // let toolbarHeight = toolbar._behavior.viewElement.getBoundingClientRect().height

      toolbar.set('maxWidth', window.innerWidth + 'px')
      // editable.set('height', `calc(100vh - ${toolbarHeight}px)`)
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