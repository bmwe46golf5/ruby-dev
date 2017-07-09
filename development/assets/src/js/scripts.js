import 'bootstrap';
import 'swiper';
import 'picturefill';
import 'typed.js';
import 'raty-js';
import 'ion-rangeslider';

var $ = jQuery;

;(function($) {
    'use strict';

    /*
    PAGE LAODING
    */
    $(window).load(function() {
       $("#gl-circle-loader-wrapper").fadeOut(500);
    })

    /*
    SWIPER SLIDER
    */
    var jobSwiper = new Swiper ('.gl-jobs-testimonial', {
      slidesPerView: 1,
      autoplay: 6000,
      loop: true
    });


    var agentSwiper = new Swiper ('.gl-agent-testimonial', {
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 15,
      pagination: '.gl-agent-pagination',
      paginationClickable: true,
      loop: true,
      breakpoints: {
            1024: {
                slidesPerView: 4
            },
            800: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2
            },
            400: {
                slidesPerView: 1
            }
        }
    });

    /*
    TYPED JS
    */
    $("#gl-slogan").typed({
        stringsElement: $('#typed-strings'),
        startDelay: 500,
        typeSpeed: 100,
        backDelay: 1500,
        loop: true,
        contentType: 'html',
        loopCount: false
    });

    /*
    PICTURE FILL
    */
    document.createElement( "picture");


    /*
    RATINGS
    */
    $('#gl-quality-rating, #gl-service-rating,#gl-response-rating').raty({
      cancel   : false,
      half     : true,
      starType : 'i'
    });


    /*
    SIDE MENU
    */
    var bodyEl = document.body,
        content = document.querySelector( 'body' ),
        openbtn = document.getElementById( 'gl-side-menu-btn' ),
        closebtn = document.getElementById( 'gl-side-menu-close-button' ),
        isOpen = false;

    function init() {
        var isExists =  $('.gl-side-menu-wrap');
        if (isExists.length) {
          initEvents();
        }
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


    /*
    HEADER HEIGHT
    */
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


    /*
    REMAINING GALLERY NUMBER
    */
    var tli = $('ul.gl-gallery li').length;

    function moreNum() {
      var result = tli - 5;

      // $('ul.gl-gallery li').eq(4).append('<div class="gl-more-img-text">'+'<span>+' + result + '</span>'+'</div>')
      $('ul.gl-gallery li').eq(4).find('a').addClass('gl-more-img-text').prepend('<span>+' + result + '</span>')
    };

    if( tli > 5){
      moreNum()
    }

    /*
    LIST VIEW & GRID VIEW
    */
    var diplayBtn = $('a.gl-sorting-btn'),
        searchItem = $('.gl-featured-items');

    diplayBtn.on('click', function(e){
      e.preventDefault();

      if(diplayBtn.hasClass('gl-grid-view')){
        $(this).removeClass('gl-grid-view').addClass('gl-list-view');
        $(this).find('i').removeClass('fa-list-ul').addClass('fa-th-large');

        searchItem.addClass('gl-listtype-display')
      } else {
        $(this).removeClass('gl-list-view').addClass('gl-grid-view');
        $(this).find('i').removeClass('fa-th-large').addClass('fa-list-ul');

        searchItem.removeClass('gl-listtype-display');
      }
    });


    /*
    ACCORDION ICON TOGGLE
    */
    $('.gl-floorplan-item .collapse, .gl-accordion-item .collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".ion-ios-plus-empty").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".ion-ios-minus-empty").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
    });

    /*
    SEARCH FILTER EXPAND BTN
    */
    if ($(this).width() < 992) {
        $(".gl-search-expand-btn").on('click', function(e) {
            e.preventDefault();

            var $btn = $(this),
                $content = $(".gl-search-filter-bar");

            $content.slideToggle(500, function () {
                //execute this after slideToggle is done
                //change text of header based on visibility of content div
                $btn.text(function () {
                    //change text based on condition
                    return $content.is(":visible") ? "Search Collapse" : "Search Expand";
                });
            });

        });
    }

    $(".gl-more-filter-btn").on('click', function(e) {
        e.preventDefault();

        var $btn = $(this),
            $content = $(".gl-advanced-search-wrapper");

        $content.slideToggle(500);

    });


    $(".gl-advanced-search-btn").on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        var $advancedSearch = $(".gl-advanced-search-wrapper"),
            $advancedSearchParent = $(".gl-directory-searchbar");

        if ($advancedSearchParent.hasClass('collapsed')) {
            $advancedSearch
            .slideDown();
            $advancedSearchParent
            .removeClass('collapsed')
            .addClass('expanded')
            // .show('1000')

        } else {
            $advancedSearch
            .slideUp()
            $advancedSearchParent
            .removeClass('expanded')
            .addClass('collapsed')
            // .hide('1000')

        }
    });
;

    /*
    HERO SECTION FULL HEIGHT
    */
    // var fakeDiv = $('.gl-header').height();

    // $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
    //     $(window).height() - fakeDiv
    // );

    // $(window).resize(function() {
    //   $('.gl-hero-img-wrapper, .gl-side-menu-wrap').height(
    //     $(window).height() - fakeDiv
    //   );
    // });
    // $(window).trigger('resize');


    /*
    MOBILE MENU SCROLLING FIXED
    */
    if($("header.gl-header").children().hasClass('.gl-header-topbar')){
        $(".navbar-collapse").css({ maxHeight: $(window).height() - ($(".navbar-header").height() + $(".gl-header-topbar").height()) + "px" });
    } else {
        $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    }


    /*
    FIXED SEARCH MAP
    */
    $(window).resize(function() {
        var searchPageHeader = $(".gl-search-template .gl-header"),
            headerHeight     = searchPageHeader.outerHeight(),
            mapParent = $('.gl-split-map').parent(),
            mapSection = $('.gl-search-map-section'),
            filterWrap = $('.gl-search-filter-wrapper'),
            filterWrapHeight = filterWrap.outerHeight(),
            total = headerHeight + filterWrapHeight;

        if( mapParent.prev().hasClass('gl-search-filter-wrapper') || mapSection.prev().hasClass('gl-header') ){

          $('.gl-split-map').height($(window).height() - total).css({
            'marginTop' : '-1px'
          });

          searchPageHeader.css({
            'position' : 'fixed',
            'marginTop' : '-1px'
          });

          mapParent.prev('.gl-search-filter-wrapper').css({
            'position' : 'fixed',
            'marginTop' : '-2px',
            'z-index' : 9
          });

          mapParent.css({
            'paddingTop' : 0
          });

          mapSection.css({
            'paddingTop' : 0
          });

        } else {

          $('.gl-split-map').height($(window).height() - headerHeight);

          searchPageHeader.css({
            'position' : 'fixed'
          })
        }

        searchPageHeader.next().css({
          'paddingTop' : 0
        })
    });

    $(window).trigger('resize');

    /*
    TAG REMOVE FUNCTIONALITY
    */
    $("a.gl-tag-btn").append('<span class="gl-close">x</span>');

    $("a.gl-tag-btn").on('click', '.gl-close', function(e){
      e.preventDefault();
      $(this).parent().remove();
    });
})(jQuery);
