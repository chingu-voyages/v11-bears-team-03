const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  plugins: [new BundleAnalyzerPlugin()]
});
