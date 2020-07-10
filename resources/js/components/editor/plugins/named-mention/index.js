import Mention from '@ckeditor/ckeditor5-mention/src/mention'

import NamedMentionEditing, { _toMentionAttribute } from './editing';
import NamedMentionUI from './ui';

/**
 * Goals for the NamedMention plugin:
 * One action: @
 *  1. Type to name it and search
 *  2. If no match, another field for search comes up, assuming the first field is a separate title. 
 *     You can still hit a button or key combo to force the second field to come up when there is a match
 *  3. You may leave the search field empty or search to link an existing one
 *
 *  A mention in the DOM should be:
 *  <a/router-link href/to="link-to-page">{{ either page.title or custom title }}</a/router-link>
 */
export default class NamedMention extends Mention {
  static get pluginName() {
    return 'NamedMention';
  }

  static get requires() {
    return [NamedMentionEditing, NamedMentionUI];
  }
}