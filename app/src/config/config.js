const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require('path');

// Basepath for all items webpack needs to build
let base = path.resolve('src/pages/')

// Paths for out html entry points
let html = glob.sync(path.resolve('src/pages/*/index.html'));

// Paths for our js entry points
let js = glob.sync(path.resolve('src/pages/*/index.js'));

// Build up a set of HTML plugins for webpack
let plugins = html.reduce((arr, filepath) => {
	// Plugin only accepts relative paths
	let filename = path.relative(base, filepath);
	// Add our plugin
	return arr.concat(new HtmlWebpackPlugin({
		chunks: [path.dirname(filename), 'common'],
		filename: filename,
		template: filepath,
	}));
}, [new HtmlWebpackPlugin({
	template: path.resolve('src/pages/index.html'),
	chunks: ['home', 'common']
})]);

// Build up a set of js entry points
let entries = js.reduce((obj, filepath) => {
	// Directory the file lives in
	let dirname = path.dirname(path.relative(base, filepath));
	// entrypoint specifying where to write and where to read from
	return Object.assign(obj, { [dirname]: filepath });
}, { home: path.resolve('src/pages/index.js') });

module.exports = {
	pages: {
		entries,
		plugins
	}
};
