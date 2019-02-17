import $ from 'jquery';

import { NAMESPACE } from './consts';
import SimplePopup from './simple-popup';
import './jquery-simple-popup.scss';

$.fn.simplePopup = function($content, options) {
  return this.each((i, elem) => {
    let $elem = $(elem);
    if (!$elem.data(NAMESPACE)) {
      let sp = new SimplePopup($elem, $content, options);
      $elem.data(NAMESPACE, sp);
    }
  });
};

$.SimplePopup = SimplePopup;
