var path = require("path");
var webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    filename: "vue-tinymce.min.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "VueTinymce",
    libraryExport: "VueTinymce",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".vue",
      ".css",
      ".less",
      ".scss",
      ".json",
    ],
  },
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue",
    },
    tinymce: "tinymce",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({ patterns: [{ context: "static", from: "**/*" }] }),
    new VueLoaderPlugin(),
  ],
};
