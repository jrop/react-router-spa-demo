var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',

	entry: './assets/js/app.js',
	
	output: {
		filename: 'build/js/app.js',
		sourceMapFilename: 'build/js/app.js.map'
	},

	resolve: {
		root: __dirname,
		alias: {
			react: path.join(__dirname, '/node_modules/react')
		}
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				loader: 'style!css!autoprefixer!less' //ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!less')
			}
		]
	},

	plugins: [
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin('build/css/style.css', { allChunks: true })
	]
}
