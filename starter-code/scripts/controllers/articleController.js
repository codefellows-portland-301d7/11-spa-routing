(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('section[id="about"]').hide();
    $('section[id="articles"]').show();
  };

  module.articleController = articleController;
})(window);
