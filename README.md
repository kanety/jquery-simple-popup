# jquery-simple-popup

A jquery plugin for simplest popup contents.

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

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
