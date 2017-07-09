import 'raty-js';

export default () => {
  $(document).ready(function() {
    $('#gl-quality-rating, #gl-service-rating,#gl-response-rating').raty({
      cancel   : false,
      half     : true,
      starType : 'i'  
    });
  });
};