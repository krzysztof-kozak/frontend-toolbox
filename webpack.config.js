const path = require("path");
const json5 = require("json5");
const toml = require("toml");
const yaml = require("yamljs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "inline-source-map",

  devServer: {
    host: "localhost",
    port: "8080",
    static: "./distribution",
    watchFiles: ["./source/**/*"],
  },

  entry: {
    index: "./source/index.js",
    print: "./source/print.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "distribution"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack - Getting started",
    }),
  ],

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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },

      {
        test: /\.csv$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
    ],
  },
};
