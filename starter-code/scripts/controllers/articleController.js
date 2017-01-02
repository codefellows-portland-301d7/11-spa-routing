(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: Reveal only the articles section! */
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
