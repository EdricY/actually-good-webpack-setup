const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  },
  output: {
    path: path.resolve("dist"),
    filename: "game.js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    },
    compress: true,
    port: 8000,
  },
};