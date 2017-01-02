(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: done! Reveal only the articles section! */
    //hide the about section
    $('section[id="about"]').hide();
    //reveal the article section
    $('section[id="articles"]').show();
  };

  module.articleController = articleController;
})(window);
