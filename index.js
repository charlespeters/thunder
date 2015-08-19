var Modernizr = require('./src/modernizr-custom');
var Thunder = require('./src/thunder-images');

if (!Modernizr.webp) {
  new Thunder();
}
