var path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/, loader: 'json-loader'
      }
    ],
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'data'],
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js'
  },
  entry: ['./src/index.js'],
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'node'
}
