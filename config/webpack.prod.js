const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          mangle: true,
          compress: {
            warnings: false,
            unused: true,
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            conditionals: true,
            evaluate: true,
            sequences: true,
            booleans: true
          },
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
});
