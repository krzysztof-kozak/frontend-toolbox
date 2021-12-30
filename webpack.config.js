const path = require("path");

module.exports = {
  entry: "./source/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "distribution"),
  },
};
