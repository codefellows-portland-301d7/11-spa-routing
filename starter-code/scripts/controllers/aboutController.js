(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('section').hide();
    $('#about').children().addBack().fadeIn();
    /* TODO: DONE Reveal only the about section! */
  };

  module.aboutController = aboutController;
})(window);
