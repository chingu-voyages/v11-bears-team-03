const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const DIR_PATH = {
  PUBLIC: path.resolve(__dirname, '../public'),
  BUILD: path.resolve(__dirname, '../build'),
  SRC: path.resolve(__dirname, '../src/client')
};

module.exports = {
  entry: [path.join(DIR_PATH.SRC, 'index')],
  output: {
    path: DIR_PATH.BUILD,
    publicPath: '',
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${DIR_PATH.SRC}/index.html`,
      filename: `${DIR_PATH.BUILD}/index.html`,
      inject: 'defer'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new InjectManifest({
      swSrc: 'src/client/service-worker.js',
      importWorkboxFrom: 'cdn'
    }),
    new CopyWebpackPlugin(
      [
        {
          from: DIR_PATH.PUBLIC,
          to: '.', // root is build
          toType: 'dir'
        }
      ],
      { debug: 'warning' },
    )
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
