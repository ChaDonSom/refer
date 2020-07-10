import BaseMentionsView from '@ckeditor/ckeditor5-mention/src/ui/mentionsview'
import MentionListItemView from '@ckeditor/ckeditor5-mention/src/ui/mentionlistitemview';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Button from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import View from '@ckeditor/ckeditor5-ui/src/view'

import TestButton from './button.js'

import './mentions.css'

export default class MentionsView extends View {
  constructor(locale) {
    super(locale);
    this.locale = locale

    this._items = new Collection();

    const mentionsView = new BaseMentionsView(locale);
    this._mentionsView = mentionsView
    mentionsView.items.bindTo(this._items).using(data => {
      const { item, marker } = data;

      const listItemView = new MentionListItemView(locale);

      const view = this._renderItem(item, marker);
      view.delegate('execute').to(listItemView);

      listItemView.children.add(view);
      listItemView.item = item;
      listItemView.marker = marker;

      listItemView.on('execute', () => {
        mentionsView.fire('execute', {
          item,
          marker
        });
      });

      return listItemView;
    } )

    let testButton = new TestButton(locale)
    testButton.label = 'Test'
    testButton.withText = true

    this.setTemplate({
      tag: 'div',
      attributes: {
        class: [
          'ck-named-mentions'
        ],
        tabindex: '-1'
      },
      children: [
        this._mentionsView,
        testButton
      ]
    });
    // this._items.add(testButton)
  }


	/**
	 * Renders a single item in the autocomplete list.
	 *
	 * @private
	 * @param {module:mention/mention~MentionFeedItem} item
	 * @param {String} marker
	 * @returns {module:ui/button/buttonview~ButtonView|module:mention/ui/domwrapperview~DomWrapperView}
	 */
  _renderItem(item, marker) {
    let view;
    let label = item ? item.id : ''

    const buttonView = new Button(this.locale);

    buttonView.label = label;
    buttonView.withText = true;

    view = buttonView;

    return view;
  }



	/**
	 * Returns item renderer for the marker.
	 *
	 * @private
	 * @param {String} marker
	 * @returns {Function|null}
	 */
  _getItemRenderer(marker) {
    const { itemRenderer } = this._mentionsConfigurations.get(marker);

    return itemRenderer;
  }

  get items() {
    return this._items
  }
  set items(v) {
    return this._items = v
  }

  selectFirst() {
    return this._mentionsView.selectFirst()
  }

  selectNext() {
    return this._mentionsView.selectNext()
  }

  selectPrevious() {
    return this._mentionsView.selectPrevious()
  }

  executeSelected() {
    return this._mentionsView.executeSelected()
  }

  select() {
    return this._mentionsView.select(arguments)
  }

  _isItemVisibleInScrolledArea() {
    return this._mentionsView._isItemVisibleInScrolledArea(arguments)
  }

  get position() {
    return this._mentionsView.position
  }
  set position(v) {
    return this._mentionsView.position = v
  }
}