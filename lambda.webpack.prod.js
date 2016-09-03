const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Clean = require('webpack-cleanup-plugin');
const HappyPack = require('happypack');
const Dependencies = require('./package.json').dependencies;

const srcDirectory = path.join(process.cwd(), 'src');
let modulesPaths = [srcDirectory];
try {
  fs.lstatSync(path.join(srcDirectory, 'common'));
  modulesPaths.push(fs.realpathSync(path.join(srcDirectory, 'common')));
} catch (error) {
  console.info('No code symlink ... skipping');
}

module.exports = {
  entry: {
    'app': './src/js/index.js',
    'vendors': Object.keys(Dependencies)
  },
  output: {
    publicPath: '/',
    path: 'dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  devtool: 'source-map',

  resolve: {
    fallback: path.join(process.cwd(), 'node_modules')
  },

  module: {
    loaders: [
      {
        test: /\.woff$/,
        loader: 'url?limit=100000',
        include: modulesPaths
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: modulesPaths
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
        include: modulesPaths
      },
      {
        test: /\.jsx?/,
        loader: 'happypack/loader',
        include: modulesPaths
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: modulesPaths
      }
    ]
  },

  plugins: [
    new Clean(),
    new webpack.DefinePlugin({
      __DEV__ : false,
      __VERSION__ : JSON.stringify('./package.json').version,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HappyPack({
      threads: 4,
      tempDir: `${process.env.HOME}/.happypack/${JSON.stringify(require('./package.json').name)}/dist/`,
      loaders: ['babel-loader']
    }),
    new HtmlWebpackPlugin({
      title: 'Angels Inc',
      template: path.join(srcDirectory, 'index.tpl.html')
    })
  ]
};