var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "assets/react_components/Country"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./main.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  output: {
    path: path.join(__dirname, "assets/react_components/Country"),
    filename: "./main.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};