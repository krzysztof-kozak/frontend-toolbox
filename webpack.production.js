const path = require('path');
const json5 = require('json5');
const toml = require('toml');
const yaml = require('yamljs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
	return {
		mode: mode,

		entry: {
			index: {
				import: './source/index.js',
			},
		},

		output: {
			filename: '[name].[contenthash].bundle.js',
			path: path.resolve(__dirname, 'distribution'),
			clean: true,
		},

		optimization: {
			/*
			splitChunks: 'all' allows webpack to extract duplicate dependencies.

			Example: if both index.js and anotherModule.js use 'lodash' library, then the library
			will be extracted to a separate place, removing some unnecessary duplication of code.

			Learn more:
				- https://webpack.js.org/guides/code-splitting#splitchunksplugin
			*/
			splitChunks: {
				chunks: 'all',

				/*
			From the webpack webite:
			"It's also good practice to extract third-party libraries, such as lodash or react, to a separate vendor chunk as they are less likely to change than our local source code. This step will allow clients to request even less from the server to stay up to date."
			*/
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},

			/*
			Since we are splitting modules into separate bundles, webpack allows further
			optimization of extracting runtime code for thuse modules into a separate chunk.

			runtimeChunk: 'single' creates a single runtime bundle for all chunks.

			Learn more:
				- https://webpack.js.org/guides/caching/#extracting-boilerplate
			*/
			runtimeChunk: 'single',

			/*
			We use deterministic ids to help with caching.
			Learn more:
				- https://webpack.js.org/guides/caching/#module-identifiers
			*/
			moduleIds: 'deterministic',
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'Webpack - Getting started',
			}),

			new MiniCssExtractPlugin(),

			new webpack.ProvidePlugin({
				_: 'lodash',
			}),
		],

		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},

				{
					test: /\.s?css$/,
					oneOf: [
						{
							test: /\.module\.s?css$/,
							use: [
								MiniCssExtractPlugin.loader,
								{
									loader: 'css-loader',
									options: { modules: true },
								},
								'postcss-loader',
								'sass-loader',
							],
						},
						{
							use: [
								MiniCssExtractPlugin.loader,
								'css-loader',
								'postcss-loader',
								'sass-loader',
							],
						},
					],
				},

				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},

				{
					test: /\.csv$/i,
					use: ['csv-loader'],
				},
				{
					test: /\.json5$/i,
					type: 'json',
					parser: {
						parse: json5.parse,
					},
				},
				{
					test: /\.toml$/i,
					type: 'json',
					parser: {
						parse: toml.parse,
					},
				},
				{
					test: /\.yaml$/i,
					type: 'json',
					parser: {
						parse: yaml.parse,
					},
				},
			],
		},
	};
};
