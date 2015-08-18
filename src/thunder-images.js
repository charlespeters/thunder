module.exports = function() {
  var images = document.querySelectorAll('[data-thunder]'), i;

  for (i = 0; i < images.length; ++i) {
    var fallback = images[i].getAttribute('data-thunder');
    images[i].setAttribute('src', fallback);
  }
};
