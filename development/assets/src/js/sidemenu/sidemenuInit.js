export default () => {
/* ------------------------------------------------------------------
                            SIDE MENU                      
------------------------------------------------------------------ */
// RIght side menu
(function() {

    var bodyEl = document.body,
        content = document.querySelector( 'body' ),
        openbtn = document.getElementById( 'gl-side-menu-btn' ),
        closebtn = document.getElementById( 'gl-side-menu-close-button' ),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener( 'click', toggleMenu );
        if( closebtn ) {
            closebtn.addEventListener( 'click', toggleMenu );
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        // content.addEventListener( 'click', function(ev) {
        //     var target = ev.target;
        //     if( isOpen && target !== openbtn ) {
        //         toggleMenu();
        //     }
        // } );
    }

    function toggleMenu() {
        if( isOpen ) {
            classie.remove( bodyEl, 'gl-show-menu' );
        }
        else {
            classie.add( bodyEl, 'gl-show-menu' );
        }
        isOpen = !isOpen;
    }

    init();

})();

$(document).ready(function() {
    var fakeDiv = $('.gl-header').height();

    $('.gl-side-menu-wrap').height(
        $(window).height() - fakeDiv
    );

    $(window).resize(function() {
      $('.gl-side-menu-wrap').height(
        $(window).height() - fakeDiv
      );
    });
    $(window).trigger('resize');
});

};