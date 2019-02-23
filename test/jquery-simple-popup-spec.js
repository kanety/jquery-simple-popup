describe('jquery-simple-popup', function() {
  beforeEach(function() {
    document.body.innerHTML = __html__['index.html'];
  });

  describe('position', function() {
    ['top-start', 'top-end', 'bottom-start', 'bottom-end',
     'left-start', 'left-end', 'right-start', 'right-end',
     'center', 'mouse'
    ].forEach(function(pos) {
      it('shows content at custom position: ' + pos, function() {
        var id = pos.replace('-', '_');
        var content_id = id + '_content';
        var $elem = $('#' + id);
        var $content = $('#' + content_id);
        $elem.simplePopup($content, {
          position: pos
        });

        $elem.click();
        expect($content.hasClass('popup-opened')).toEqual(true);
      });
    });
  });

  describe('context menu', function() {
    it('shows content by contextmenu', function() {
      var $elem = $('#context');
      var $content = $('#context_content');
      $elem.simplePopup($content, {
        trigger: 'contextmenu'
      });

      $elem.contextmenu();
      expect($content.hasClass('popup-opened')).toEqual(true);
    });
  });
});
