const path = require("path");

module.exports = {
  entry: "./source/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "distribution"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
