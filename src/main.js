$(function() {

  addImageHandlers();

  $('#slider').responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 10,
    maxwidth: 800,
    namespace: 'large-btns'
  });

  // added the click handler to prevent images from disappearing on ios
  function imageHandler(className, enterImgPath, leaveImgPath) {
    $(className).on({
      mouseenter: function() {
        $(className).attr('src', enterImgPath);
      },
      mouseleave: function() {
        $(className).attr('src', leaveImgPath);
      },
      click: function() {
        $(className).attr('src', leaveImgPath);
      }
    });
  }

  function addImageHandlers() {
    // class names with '-home' included because path is different for images on index.html
    imageHandler('.js-linkedin-home', 'images/linkedin-dark.svg', 'images/linkedin.svg');
    imageHandler('.js-linkedin', '../images/linkedin-dark.svg', '../images/linkedin.svg');
  }

});
