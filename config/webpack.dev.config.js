/* eslint-env node */
// imports
const common  = require('./webpack.common.config.js'),
      webpack = require('webpack'),
      merge   = require('webpack-merge'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

// variables
const appCfg = require('./app.config.js'),
      files  = appCfg.files,
      paths  = appCfg.paths,
      server = appCfg.server

// webpack development configuration
const config = {
  'plugins': [
    new HtmlWebpackPlugin({
      'cached'           : false,
      'title'            : 'Webpack Dev Server',
      'template'         : `./${files.template}`,
      'alwaysWriteToDisk': true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  'output': {
    'filename'  : files['dev:bundle'],
    'path'      : paths.full.build,
    'pathinfo'  : true,
    'publicPath': `http://${server.host}:${server.port}/`,
  },
  'devtool': 'inline-source-map',
  'devServer': {
    'clientLogLevel'    : 'info',
    'contentBase'       : paths.full.build,
    'historyApiFallback': false,
    'host'              : server.host,
    'hot'               : true,
    'inline'            : true,
    'overlay'           : true,
    'port'              : server.port,
    'publicPath'        : `http://${server.host}:${server.port}/`,
    'stats': {
      'all'           : undefined,
      'chunks'        : false,
      'chunkModules'  : false,
      'colors'        : true,
      'env'           : true,
      'exclude'       : ['node_modules'],
      'excludeAssets' : ['node_modules'],
      'excludeModules': ['node_modules'],
    },
  },
}

// merge configurations and export
module.exports = merge(common, config)
