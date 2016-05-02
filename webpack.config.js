var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

module.exports = {
  entry: "./js/script.js",
  output: {
    path: __dirname,
    filename: "public/js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
         cacheDirectory: true,
         presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('public/css/bundle.css')
  ],
    resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}
