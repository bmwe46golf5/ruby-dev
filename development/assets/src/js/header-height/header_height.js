export default () => {
    'use strict';
  (function($){
var resizeTimer,
          mainHeader = $(".gl-header");
          
      mainHeader.after('<section class="gl-fake-div"></section>');

      var fakeSection = mainHeader.next();
      var mainHeaderHeight = mainHeader.outerHeight();
          fakeSection.css({
            'height' : mainHeaderHeight
          });

      $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          var mainHeaderHeight = mainHeader.outerHeight();
          fakeSection.css({
            'height' : mainHeaderHeight
          });
        }, 250);
      });
  })(jQuery);
    // $(document).ready(function() {
    //   var resizeTimer,
    //       mainHeader = $(".gl-header");
          
    //   mainHeader.after('<section class="gl-fake-div"></section>');

    //   var fakeSection = mainHeader.next();
    //   var mainHeaderHeight = mainHeader.outerHeight();
    //       fakeSection.css({
    //         'height' : mainHeaderHeight
    //       });

    //   $(window).on('resize', function(e) {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(function() {
    //       var mainHeaderHeight = mainHeader.outerHeight();
    //       fakeSection.css({
    //         'height' : mainHeaderHeight
    //       });
    //     }, 250);
    //   });
    // });

};
