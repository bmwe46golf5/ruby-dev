import 'jquery-lazyload';

export default () => {
    'use strict';

    $(document).ready(function() {
      $("img.gl-lazy").lazyload({
        threshold : 200,
        effect : "fadeIn"
      });
    });

};
