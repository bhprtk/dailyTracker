const express = require("express");
const path = require("path");
const colors = require("colors");
const config = require('./webpack.config.dev');
const webpack = require('webpack');

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, './public/index.html'));
// });

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`.magenta);
})
