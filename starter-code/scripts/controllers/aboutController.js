(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Reveal only the about section! */
    // hide the article section in html
    $('section[id="articles"]').hide();
    // show the about section in html
    $('section[id="about"]').show();
  };

  module.aboutController = aboutController;
})(window);
