const HtmlPlugin = require('html-webpack-plugin')
const {join} = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: join(__dirname, 'docs'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      inject: true
    })
  ]
}
