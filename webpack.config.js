const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output: {
    filename: 'vue-tinymce.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'VueTinymce',
    umdNamedDefine: true
  },
  externals: {
    'vue': 'Vue',
    'tinymce': 'tinymce'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
