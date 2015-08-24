var Modernizr = require('./src/modernizr-custom');
var Thunder = require('./src/thunder-images');

Modernizr.on('webp', function (webp) {
  if (!webp) {
    new Thunder();
  }
});
