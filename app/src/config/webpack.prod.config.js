const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { pages } = require('./config.js');
const path = require('path');

/**
 * Production Webpack config
 */
module.exports = {
	mode: 'production',
	entry: pages.entries,
	plugins: [ new CleanWebpackPlugin() ].concat(pages.plugins),
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
