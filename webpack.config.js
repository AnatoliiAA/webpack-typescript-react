const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/public"),
    },
    open: true,
    compress: true,
    port: 3000,
  },
};
