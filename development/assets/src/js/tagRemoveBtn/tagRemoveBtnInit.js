export default () => {
  $(document).ready(function() {
    $("a.gl-tag-btn").append('<span class="gl-close">x</span>');

    $("a.gl-tag-btn").on('click', '.gl-close', function(e){
      e.preventDefault();
      $(this).parent().remove();
    });
  });
};