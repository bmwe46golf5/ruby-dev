export default () => {
    $(document).ready(function() {
        if($("header.gl-header").children().hasClass('.gl-header-topbar')){
            $(".navbar-collapse").css({ maxHeight: $(window).height() - ($(".navbar-header").height() + $(".gl-header-topbar").height()) + "px" });
        } else {
            $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
        }
    });
};
