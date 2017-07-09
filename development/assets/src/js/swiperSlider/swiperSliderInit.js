import 'swiper';

export default () => {
  $(document).ready(function() {
    var jobSwiper = new Swiper ('.gl-jobs-testimonial', {
      slidesPerView: 1,
      autoplay: 6000,
      loop: true
    });


    var agentSwiper = new Swiper ('.gl-agent-testimonial', {
      slidesPerView: 4,
      paginationClickable: true,
      spaceBetween: 15,
      pagination: '.gl-agent-pagination',
      paginationClickable: true,
      loop: true,
      breakpoints: {
            1024: {
                slidesPerView: 4
            },
            800: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2
            },
            400: {
                slidesPerView: 1
            }
        }
    });
  });
};