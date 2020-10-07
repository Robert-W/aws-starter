const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { pages } = require('./config.js');
const path = require('path');

/**
 * Webpack development config
 */
module.exports = {
	mode: 'development',
	entry: pages.entries,
	devtool: 'inline-source-map',
	plugins: [ new CleanWebpackPlugin() ].concat(pages.plugins),
	devServer: {
		contentBase: path.resolve('dist'),
		port: process.env.PORT,
		host: '0.0.0.0'
	},
	output: {
		filename: 'public/[name].[contenthash].js',
		path: path.resolve('dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: 'common',
		},
	},
};
