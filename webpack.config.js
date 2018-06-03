const path = require("path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve("dist"),
    filename: "script.js"
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ["babel-loader"],
      exclude: /node_modules/
    },
    {
      test: /\.jsx$/,
      loader: ["babel-loader"],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: false
        }
      }, {
        loader: "sass-loader", options: {
          sourceMap: false
        }
      }]
    },
    {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: false
        }
      }]
    },
    {
      test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader"
    }
    ]
  }
};