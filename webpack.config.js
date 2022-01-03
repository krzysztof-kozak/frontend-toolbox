const path = require('path');
const json5 = require('json5');
const toml = require('toml');
const yaml = require('yamljs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	return {
		mode: 'development',

		devtool: 'eval-cheap-module-source-map',

		devServer: {
			host: 'localhost',
			port: '8080',
			static: './distribution',
			watchFiles: ['./source/**/*'],
		},

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
			runtimeChunk: 'single',
			moduleIds: 'deterministic',
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
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
					test: /\.css$/i,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
							},
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
