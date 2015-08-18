var Modernizr = require('./modernizr-custom');
var Thunder = require('./src/thunder-images');

if (!Modernizr.webp) {
  new Thunder();
}
