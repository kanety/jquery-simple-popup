const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    "jquery-simple-popup": "./src/jquery-simple-popup.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: "/dist"
  },

  externals: {
    jquery: "jQuery"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },

  watchOptions: {
    poll: 1000
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
    disableHostCheck: true
  }
};
