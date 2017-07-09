export default () => {
    $(document).ready(function() {
        // SEARCH FILTER EXPAND BTN
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
    });
};
