module.exports = {

  watch: {
    scripts: [
      'index.js',
      'src/**/*.js'
    ]
  },

  modernizr: {
    src: [
      'index.js',
      'src/**/*.js',
      '!src/modernizr-custom.js'
    ],
    customizr: {
      options: [
        "addTest"
      ]
    },
    dest: 'src',
    filename: 'modernizr-custom.js'
  },

  jshint: {
    src: [
      'index.js',
      'src/**/*.js',
      '!src/modernizr-custom.js'
    ]
  },

  optimize: {
    js: {
      src:  'dist/thunder.js',
      dest: 'dist',
      options: {}
    },
  }

};
