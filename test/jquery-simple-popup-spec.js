describe('jquery-simple-popup', function() {
  beforeEach(function() {
    document.body.innerHTML = __html__['index.html'];
  });

  it('has custom position', function() {
    ['top-start', 'top-end', 'bottom-start', 'bottom-end',
     'left-start', 'left-end', 'right-start', 'right-end',
     'center', 'mouse'].forEach(function(pos) {
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

  it('has context menu', function() {
    var $elem = $('#context');
    var $content = $('#context_content');
    $elem.simplePopup($content, {
      trigger: 'contextmenu'
    });

    $elem.contextmenu();
    expect($content.hasClass('popup-opened')).toEqual(true);
  });

  it('has modal', function() {
     var $elem = $('#modal');
     var $content = $('#modal_content');
     $elem.simplePopup($content, {
       modal: true
     });

     $elem.click();
     expect($content.hasClass('popup-opened')).toEqual(true);
  });
});
