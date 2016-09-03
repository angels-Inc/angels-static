const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

const srcDirectory = path.join(process.cwd(), 'src');
let modulesPaths = [srcDirectory];
try {
  fs.lstatSync(path.join(srcDirectory, 'common'));
  modulesPaths.push(fs.realpathSync(path.join(srcDirectory, 'common')));
} catch (error) {
  console.info('No code symlink ... skipping');
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/js/index.js'
  ],

  output: {
    publicPath: '/',
    path: 'build',
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  resolve: {
    fallback: path.join(process.cwd(), 'node_modules')
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: modulesPaths
      },
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
        loader: 'file',
        include: modulesPaths
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__ : (process.env.NODE_ENV !== 'production'),
      __VERSION__ : JSON.stringify(require('./package.json').version)
    }),
    new HappyPack({
      threads: 4,
      tempDir: `${process.env.HOME}/.happypack/${JSON.stringify(require('./package.json').name)}/dev/`,
      loaders: ['babel-loader']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'λ Lambda Dev Server',
      template: path.join(srcDirectory, 'index.tpl.html')
    })
  ],

  devServer: {
    publicPath: '/',
    contentBase: 'build',
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    progress: true,
    colors: true,
    noInfo: true
  }
};
