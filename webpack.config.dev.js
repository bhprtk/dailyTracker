const webpack = require('webpack');
const path = require('path');

module.exports = {
	debug: true,
	noInfo: false,
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index' // entry point should be last, order is important
  ],
	target: 'web',
	output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
	devServer: {
		contentBase: './src' // tell webpack devServer where our code is
 	},
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
	module: { // specify the types of files webpack needs to handle
	 loaders: [
		 {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
		 {test: /(\.css)$/, loaders: ['style', 'css']},
		 { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
		 // all below are for bootstrap
		 {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
		 {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
		 {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
		 {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
	 ]
 }
};
