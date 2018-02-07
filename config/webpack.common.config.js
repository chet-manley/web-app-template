/* eslint-env node */
// imports
const CleanWebpackPlugin = require('clean-webpack-plugin')

// variables
const appCfg = require('./app.config.js'),
      files  = appCfg.files,
      paths  = appCfg.paths

// parameters for clean-webpack-plugin
const cleanPluginParams = {
  'paths': [
    `./${paths.dist}/*.*`,
    `./${paths.build}/*.*`,
  ],
  'options': {
    'root': paths.full.root,
  },
}

// webpack common configuration
const config = {
  'context': paths.full.src,
  'entry': {
    'main': `./${files.bootstrap}`,
  },
  'module': {
    'rules': [
      {
        'test': /\.html$/,
        'use': [
          'html-loader',
        ]
      },
      {
        'test': /\.css$/,
        'use': [
          'style-loader',
          'css-loader',
        ]
      },
      {
        'test': /\.(png|svg|jpg|jpeg|gif)$/,
        'use': [
          'file-loader'
        ]
      },
    ],
  },
  'plugins': [
    new CleanWebpackPlugin(cleanPluginParams.paths, cleanPluginParams.options),
  ],
}

// merge configurations and export
module.exports = config
