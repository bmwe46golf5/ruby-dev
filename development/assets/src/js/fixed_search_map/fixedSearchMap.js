export default () => {
    $(document).ready(function() {
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
    });
};
