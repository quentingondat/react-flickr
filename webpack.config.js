const path = require('path')

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.js'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    sourceMapFilename: 'public/build/bundle.map',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'style-loader!css-loader'
    }
    ]
  }
}
