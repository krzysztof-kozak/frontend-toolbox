const path = require("path");
const json5 = require("json5");
const toml = require("toml");
const yaml = require("yamljs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    /*
 	Possible gotcha when using multiple entry point per html page:

		[HMR] Update failed: ChunkLoadError: Loading hot update chunk index failed.
		(missing: http://localhost:8080/someFileName.hash.hot-update.js) 

	
	Possible solutions:

    - Set runtimeChunk to "single"

		- Don't use multiple entry points:

      Although using multiple entry points per page is allowed in webpack,
			it should be avoided when possible in favor of an entry point with multiple imports:
			entry: { page: ['./analytics', './app'] }.
			This results in a better optimization and consistent execution order when using async script tags.

			SOURCE: https://webpack.js.org/guides/code-splitting/

		Useful links:
			- https://bundlers.tooling.report/code-splitting/multi-entry/
			- https://stackoverflow.com/questions/65640449/how-to-solve-chunkloaderror-loading-hot-update-chunk-second-app-failed-in-webpa
			- https://webpack.js.org/guides/code-splitting/#prevent-duplication
      - https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
  */

    index: {
      import: "./source/index.js",
    },
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "distribution"),
    clean: true,
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack - Getting started",
    }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
