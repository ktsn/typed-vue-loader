const path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname),
    filename: '__build__.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              esModule: true
            }
          },
          '..' // typed-vue-loader
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  }
}