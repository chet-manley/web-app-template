/* eslint-env node */
// imports
const path  = require('path'),
      pjson = require('../package.json')

// constants
const rootPath = path.resolve(__dirname, '../'),
      config   = {}

// app info
config.name    = pjson.name
config.version = pjson.version

// common app paths
config.paths = {
  'full': {
    'root' : rootPath,
    'src'  : path.join(rootPath, 'src'),
    'dist' : path.join(rootPath, 'dist'),
    'build': path.join(rootPath, 'build'),
  },
  'src'  : '/src',
  'dist' : '/dist',
  'build': '/build',
}

// common app files
config.files = {
  'bootstrap' : 'app.bootstrap.js',
  'bundle'    : 'app.bundle.js',
  'dev:bundle': 'app.dev.js',
  'template'  : 'index.html',
}

// development server
config.server = {
  'host': 'localhost',
  'port': '9001', // it's over 9000!
}

module.exports = config
