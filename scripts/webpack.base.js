var path = require('path');
var rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(rootPath, 'src')
    }, {
      test: /\.js$/,
      loaders: ['eslint-loader'],
      include: path.join(rootPath, 'src')
    }, {
      test: /\.svg$/,
      loaders: ['raw-loader'],
      include: path.join(rootPath, 'images')
    }, {
      test: /.*\.(gif|png|jpe?g)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ],
      include: path.join(rootPath, 'images')
    }]
  },
  resolve: {
    alias: {
      images: path.resolve(rootPath, 'images')
    }
  }
};
