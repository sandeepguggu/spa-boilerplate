var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base');
var rootPath = path.resolve(__dirname, '../');

config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './src/index'
];

config.output = {
  path: rootPath,
  filename: "bundle.js",
  publicPath: "/static/"
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

config.devtool = '[inline-]source-map';

module.exports = config;
