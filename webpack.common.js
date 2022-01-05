const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Frontend Toolbox - by Kris Kozak',
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
		],
	},
};
