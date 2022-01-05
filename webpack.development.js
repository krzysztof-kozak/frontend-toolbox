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
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'distribution'),
			clean: true,
		},

		optimization: {
			/*
			In most cases, 'multiple' (default) value will work out well.
			
			Change this to 'single' if you are running multiple entry points.
			Learn more at:
			- https://webpack.js.org/guides/code-splitting/#prevent-duplication
			- https://bundlers.tooling.report/code-splitting/multi-entry/
			
			You might encounter this gotcha, too:
			
			> [HMR] Update failed: ChunkLoadError: Loading hot update chunk index failed.
			> (missing: http://localhost:8080/someFileName.hash.hot-update.js)
			
			In which case, changing this value to 'single' will fix the issue.
			Learn more at:
			-https://stackoverflow.com/questions/65640449/how-to-solve-chunkloaderror-loading-hot-update-chunk-second-app-failed-in-webpa
			
			*/
			runtimeChunk: 'multiple',

			/* 
			For better development / debugging purposes, we used 'named' ids here.

			The generated bundles will use readable names such as:
				- index.bundle.js
				- runtime~index.bundle.js
				- vendors.bundle.js

			When in production mode, we will use "deterministic" module ids.
			This is explained in the production config file.
			*/
			moduleIds: 'named',
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

				// Let webpack handle loading and optimizing images.
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},

				// Let webpack handle using local fonts.
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},

				/*
				Let webpack handle using different data formats:
					- csv
					- toml
					- yaml
					- json
				*/
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
