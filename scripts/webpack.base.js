var path = require('path');
var rootPath = path.resolve(__dirname, '../');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(rootPath, 'src')
    }]
  }
};
