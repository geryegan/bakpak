var webpack = require('webpack');
var path = require('path');

module.exports = {
	debug: true,
	entry: {
		main: './client/index.jsx'
	},
	output:{
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
    loaders: [{
      exclude: path.resolve(__dirname, "node_modules"),
      loader: 'babel-loader'
      // query: {
      //   presets: ['react', 'es2015', 'stage-1']
      // }
    }]
  },
    resolve: {
	  extensions: ['', '.js', '.jsx']
	},
	devServer: {
	  historyApiFallback: true,
	  contentBase: './'
	}
}