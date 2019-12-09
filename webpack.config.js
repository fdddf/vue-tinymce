const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  output: {
    filename: "vue-tinymce.min.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    library: "VueTinymce",
    libraryExport: "VueTinymce"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css",".vue"]
  },
  externals: {
    vue: "Vue",
    tinymce: "tinymce"
  },
  plugins: [new VueLoaderPlugin()]
};
