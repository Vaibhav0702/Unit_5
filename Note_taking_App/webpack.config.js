const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(".", "build"), //folder
    filename: "bundle.js", //filename
  },
  mode: "production",
//   ------------copy from css-loader----
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
