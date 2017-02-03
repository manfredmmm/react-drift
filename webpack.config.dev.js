var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.jpg/,
      loader: 'file'
    }, {
      test: /\.scss/,
      // Standard CSS Modules
      //loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]!sass', 'cssnext']
      // No hash but WITH postcss-cssnext
      //loader: 'style!css?modules=1&localIdentName=[path][local]!sass!cssnext'
      // No hash No postcss
      //loader: 'style!css?modules=1&localIdentName=[path][name][local]!sass'
      // Emoji
      //loader: 'style!css?modules=1&localIdentName=[name]__[emoji]__[local]!sass!cssnext'
      // BEM
      loader: 'style!css?modules=1&localIdentName=[name]__[local]!sass'
    }]
  }
}

