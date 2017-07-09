export default () => {
    'use strict';

    $(document).ready(function() {
        // SEARCH FILTER EXPAND BTN
        $(".gl-more-filter-btn").on('click', function(e) {
            e.preventDefault();
           
            var $btn = $(this),
                $content = $(".gl-advanced-search-wrapper");

            $content.slideToggle(500);

        });
    });

};
