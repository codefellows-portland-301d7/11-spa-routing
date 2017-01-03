(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('section').hide();
    $('#articles').fadeIn();
    /* TODO: DONE Reveal only the articles section! */
  };

  module.articleController = articleController;
})(window);
