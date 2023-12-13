const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
const config = {
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    clean: true,
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new webpack.BannerPlugin("Copyright MyCompany"),
    new MiniCssExtractPlugin({ filename: "bundle.[contenthash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = config;
