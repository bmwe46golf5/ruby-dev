export default () => {
    $(document).ready(function() {
          // MORE GALLERY NUM
        (function() {
            var tli = $('ul.gl-gallery li').length;

            function moreNum() {
              var result = tli - 5;

              // $('ul.gl-gallery li').eq(4).append('<div class="gl-more-img-text">'+'<span>+' + result + '</span>'+'</div>')
              $('ul.gl-gallery li').eq(4).find('a').addClass('gl-more-img-text').prepend('<span>+' + result + '</span>')
            };

            if( tli > 5){
              moreNum()
            }
        })();
    });
};
