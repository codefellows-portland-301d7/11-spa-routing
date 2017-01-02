(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Reveal only the articles section! */
    $('#about').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
