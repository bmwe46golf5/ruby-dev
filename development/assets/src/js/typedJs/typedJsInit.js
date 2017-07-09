import 'typed.js';

export default () => {
  $(document).ready(function() {
    $("#gl-slogan").typed({
        stringsElement: $('#typed-strings'),
        startDelay: 500,
        typeSpeed: 100,
        backDelay: 1500,
        loop: true,
        contentType: 'html',
        loopCount: false
    });
  });
};