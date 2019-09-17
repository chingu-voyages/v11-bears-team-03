const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
	entry: ['react-hot-loader/patch'],
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		hot: true,
		port: 3000,
		open: true,
	},
});
