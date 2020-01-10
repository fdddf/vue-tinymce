const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.resolve(__dirname, "../docs");

const config = {
  output: {
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".vue"]
  },
  externals: {
    vue: "Vue",
    tinymce: "tinymce"
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()]
};

module.exports = (env, argv) => {
  const HtmlWebpackPluginOptions = {
    script: "",
    template: "index.html"
  };
  if (argv.mode === "production") {
    HtmlWebpackPluginOptions.script = ".min";
  }
  config.plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptions));
  return config;
};
