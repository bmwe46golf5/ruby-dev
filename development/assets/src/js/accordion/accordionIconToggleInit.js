export default () => {
    $(document).ready(function() {
        $('.gl-floorplan-item .collapse, .gl-accordion-item .collapse').on('shown.bs.collapse', function(){
            $(this).parent().find(".ion-ios-plus-empty").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty");
        }).on('hidden.bs.collapse', function(){
            $(this).parent().find(".ion-ios-minus-empty").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
        });
    });
};
