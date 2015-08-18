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
      'src/**/*.js'
    ],
    customizr: {
      options: [
        "addTest"
      ]
    },
    dest: '.',
    filename: 'modernizr-custom.js'
  },

  jshint: {
    src: [
      'index.js',
      'src/**/*.js'
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
