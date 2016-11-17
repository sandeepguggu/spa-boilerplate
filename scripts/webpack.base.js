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
      test: /.*\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack',
          query: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ],
      include: path.join(rootPath, 'images')
    }]
  }
};
