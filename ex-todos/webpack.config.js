const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    clean: true,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './index.html'
  }),
  new webpack.BannerPlugin('Copyright MyCompany')
],
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;
