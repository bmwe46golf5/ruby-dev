export default () => {
    $(document).ready(function() {
        $('.gl-compare-icon .gl-compare-btn-wrapper').on('click', function(event) {
            event.preventDefault();

            $(this).parent().find('#gl-compare-menu').toggleClass('gl-compare-menu-visible');
          });
    });
};
