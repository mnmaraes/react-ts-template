module.exports = {
  entry: "./build/client/index.js",
  output: {
    path: "./public/js",
    filename: "index.js"
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015']
          }
        }
      ]
    }
  }
