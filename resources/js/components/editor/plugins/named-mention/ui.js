import MentionUI, {
  createRegExp
} from '@ckeditor/ckeditor5-mention/src/mentionui'
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import { debounce } from 'lodash-es';

import DomWrapperView from '@ckeditor/ckeditor5-mention/src/ui/domwrapperview';
import MentionListItemView from '@ckeditor/ckeditor5-mention/src/ui/mentionlistitemview';

import NamedMentionsView from '@comps/editor/plugins/named-mention/views/mentions'

export default class NamedMentionUI extends MentionUI {

  constructor(editor) {
    super(editor);

		/**
		 * The mention view.
		 *
		 * @type {module:mention/ui/mentionsview~MentionsView}
		 * @private
		 */
    this._namedMentionsView = this._createMentionView();
    this._mentionsView = this._namedMentionsView._mentionsView

		/**
		 * Stores mention feeds configurations.
		 *
		 * @type {Map<String, Object>}
		 * @private
		 */
    this._mentionsConfigurations = new Map();

		/**
		 * Debounced feed requester. It uses `lodash#debounce` method to delay function call.
		 *
		 * @private
		 * @param {String} marker
		 * @param {String} feedText
		 * @method
		 */
    this._requestFeedDebounced = debounce(this._requestFeed, 100);

    editor.config.define('mention', { feeds: [] });
  }

	/**
	 * Creates the _namedMentionsView
	 *
	 * @private
	 * @returns {module:mention/ui/namedMentionsview~NamedMentionsView}
	 */
  _createMentionView() {
    const locale = this.editor.locale;

    const namedMentionsView = new NamedMentionsView(locale);

    this._items = new Collection();

    namedMentionsView.items.bindTo(this._items).using(data => {
      const { item, marker } = data;

      const listItemView = new MentionListItemView(locale);

      const view = this._renderItem(item, marker);
      view.delegate('execute').to(listItemView);

      listItemView.children.add(view);
      listItemView.item = item;
      listItemView.marker = marker;

      listItemView.on('execute', () => {
        namedMentionsView.fire('execute', {
          item,
          marker
        });
      });

      return listItemView;
    });

    namedMentionsView.on('execute', (evt, data) => {
      const editor = this.editor;
      const model = editor.model;

      const item = data.item;
      const marker = data.marker;

      const mentionMarker = editor.model.markers.get('mention');

      // Create a range on matched text.
      const end = model.createPositionAt(model.document.selection.focus);
      const start = model.createPositionAt(mentionMarker.getStart());
      const range = model.createRange(start, end);

      this._hideUIAndRemoveMarker();

      editor.execute('mention', {
        mention: item,
        text: item.text,
        marker,
        range
      });

      editor.editing.view.focus();
    });

    return namedMentionsView;
  }


  get _isUIVisible() {
    return this._balloon.visibleView === this._namedMentionsView;
  }

  _showOrUpdateUI(markerMarker) {
    if (this._isUIVisible) {
      // Update balloon position as the mention list view may change its size.
      this._balloon.updatePosition(this._getBalloonPanelPositionData(markerMarker, this._mentionsView.position));
    } else {
      this._balloon.add({
        view: this._namedMentionsView,
        position: this._getBalloonPanelPositionData(markerMarker, this._mentionsView.position),
        withArrow: false,
        singleViewMode: false
      });
    }

    this._mentionsView.position = this._balloon.view.position;
    this._mentionsView.selectFirst();
  }

  _hideUIAndRemoveMarker() {
    // Remove the mention view from balloon before removing marker - it is used by balloon position target().
    if (this._balloon.hasView(this._namedMentionsView)) {
      this._balloon.remove(this._namedMentionsView);
    }

    if (checkIfStillInCompletionMode(this.editor)) {
      this.editor.model.change(writer => writer.removeMarker('mention'));
    }

    // Make the last matched position on panel view undefined so the #_getBalloonPanelPositionData() method will return all positions
    // on the next call.
    this._namedMentionsView.position = undefined;
  }


	/**
	 * Handles the feed response event data.
	 *
	 * @param data
	 * @private
	 */
  _handleFeedResponse(data) {
    const { feed, marker } = data;

    // If the marker is not in the document happens when the selection had changed and the 'mention' marker was removed.
    if (!checkIfStillInCompletionMode(this.editor)) {
      return;
    }

    // Reset the view.
    this._items.clear();

    for (const feedItem of feed) {
      const item = typeof feedItem != 'object' ? { id: feedItem, text: feedItem } : feedItem;

      this._items.add({ item, marker });
    }

    const mentionMarker = this.editor.model.markers.get('mention');

    if (this._items.length) {
      this._showOrUpdateUI(mentionMarker);
    } else {
      // Do not show empty mention UI.
      this._hideUIAndRemoveMarker();
    }
  }
}

export {
  createRegExp
}


// Checks the mention plugins is in completion mode (e.g. when typing is after a valid mention string like @foo).
//
// @returns {Boolean}
function checkIfStillInCompletionMode(editor) {
  return editor.model.markers.has('mention');
}