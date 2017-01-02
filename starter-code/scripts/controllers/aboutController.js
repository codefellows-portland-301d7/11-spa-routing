(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE Reveal only the about section! */
    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
