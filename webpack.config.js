const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Triangle Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  plugins: [
    new CleanWebpackPlugin(['dist']),   // new line
    new HtmlWebpackPlugin({
      title: 'Triangle Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Triangle Tracker',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
          test: /\.js$/,
          exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      }
    ]
  }
};