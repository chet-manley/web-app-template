/* eslint-env node  */
// imports
const common  = require('./webpack.common.config.js'),
      merge   = require('webpack-merge')

// variables
const appCfg = require('./app.config.js'),
      files  = appCfg.files,
      paths  = appCfg.paths

// webpack production configuration
const config = {
  'output': {
    'filename': files.bundle,
    'path'    : paths.full.dist,
    'pathinfo': false,
  },
}

// merge configurations and export
module.exports = merge(common, config)
