export default () => {
    $(document).ready(function() {
        // SEARCH FILTER EXPAND BTN
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
    });
};
