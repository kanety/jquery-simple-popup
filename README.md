# jquery-simple-popup

A jquery plugin for simple popup contents.

## Dependencies

* jquery

## Installation

Install from npm:

    $ npm install @kanety/jquery-simple-popup --save

## Usage

Build html as follows:

```html
<button type="button" id="basic">Button</button>
<div id="basic_content">
  <div>content</div>
  <div>content</div>
</div>
```

Then run:

```javascript
$('#basic').simplePopup('#basic_content');
```

Change popup position:

```javascript
$('#basic').simplePopup('#basic_content', {
  position: 'right-start'
});
```

Following positions are available:

* top-start
* top-end
* bottom-start (Default)
* bottom-end
* left-start
* left-end
* right-start
* right-end

### Context menu

```html
<div id="context">Text</div>
<div id="context_content">
  <div>content</div>
  <div>content</div>
</div>
```

```javascript
$('#context').simplePopup('#context_content', {
  trigger: 'contextmenu'
});
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
