(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE Reveal only the about section! */
    $('section[id="articles"]').hide();
    $('section[id="about"]').show();
  };

  module.aboutController = aboutController;
})(window);
