export default () => {
    'use strict';

    $(document).ready(function() {
        var fakeDiv = $('.gl-header').height();

        $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
            $(window).height() - fakeDiv
        );

        $(window).resize(function() {
          $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
            $(window).height() - fakeDiv
          );
        });
        $(window).trigger('resize');
    });

};
