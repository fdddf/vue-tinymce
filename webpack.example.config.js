const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'example.js',
    chunkFilename: '[id].bundle.js',
  },
  externals: {
    'vue': 'Vue',
    'tinymce': 'tinymce'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {},
}

