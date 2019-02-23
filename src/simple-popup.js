import $ from 'jquery';
import { NAMESPACE } from './consts';

const DEFAULTS = {
  trigger: 'click',
  position: 'bottom',
};

export default class SimplePopup {
  constructor(button, content, options = {}) {
    this.setDefaults(options);
    this.options = $.extend(true, {}, DEFAULTS, options);

    this.$button = $(button);
    this.$content = $(content);
    this.$document = $(document);

    this.init();
    this.bindDocument();
  }

  setDefaults(options) {
    if (options.trigger == 'contextmenu') {
      options.position = options.position || 'mouse';
    }
  }

  init() {
    this.$content.addClass(NAMESPACE);
    this.unbind();
    this.bind();
  }

  bind() {
    this.$button.on(`${this.options.trigger}.${NAMESPACE}`, (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.mousePosX = e.pageX;
      this.mousePosY = e.pageY;
      this.toggle();
    });
  }

  bindDocument() {
    this.$document.on(`click.${NAMESPACE}`, (e) => {
      this.close();
    });
  }

  unbind() {
    this.$button.off(`.${NAMESPACE}`);
  }

  unbindDocument() {
    this.$document.off(`.${NAMESPACE}`);
  }

  toggle() {
    if (this.$content.hasClass('popup-opened')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    let [top, left] = this.position();
    this.$content.css({ top: top, left: left });
    this.$content.addClass('popup-opened');
  }

  close() {
    this.$content.removeClass('popup-opened');
  }

  position() {
    let top = 0, left = 0;
    let button = this.$button.get(0);
    let content = this.$content.get(0);

    switch (this.options.position) {
    case 'top':
    case 'top-start':
      top = button.offsetTop - content.offsetHeight;
      left = button.offsetLeft;
      break;
    case 'top-end':
      top = button.offsetTop - content.offsetHeight;
      left = button.offsetLeft - (content.offsetWidth - button.offsetWidth);
      break;
    case 'bottom':
    case 'bottom-start':
      top = button.offsetTop + button.offsetHeight;
      left = button.offsetLeft;
      break;
    case 'bottom-end':
      top = button.offsetTop + button.offsetHeight;
      left = button.offsetLeft - (content.offsetWidth - button.offsetWidth);
      break;
    case 'right':
    case 'right-start':
      top = button.offsetTop;
      left = button.offsetLeft + button.offsetWidth;
      break;
    case 'right-end':
      top = button.offsetTop - (content.offsetHeight - button.offsetHeight);
      left = button.offsetLeft + button.offsetWidth;
      break;
    case 'left':
    case 'left-start':
      top = button.offsetTop;
      left = button.offsetLeft - content.offsetWidth;
      break;
    case 'left-end':
      top = button.offsetTop - (content.offsetHeight - button.offsetHeight);
      left = button.offsetLeft - content.offsetWidth;
      break;
    case 'center':
      top = (window.innerHeight - content.offsetHeight) / 2;
      left = (window.innerWidth - content.offsetWidth) / 2;
      break;
    case 'mouse':
      top = this.mousePosY;
      left = this.mousePosX;
      break;
    }

    return [top, left];
  }

  static getDefaults() {
    return DEFAULTS;
  }

  static setDefaults(options) {
    $.extend(true, DEFAULTS, options);
  }
}
