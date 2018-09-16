const webpack = require('webpack')
const path = require("path")
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

module.exports = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    open: true,
    hot: true,
    proxy: {},
    compress: true, // 开发服务器是否启动gzip等压缩
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: true,
      hash: true // 为静态资源生成hash值
    }),
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
      'p': function(...arr) {
        console.log(...arr)
      },
      'd': function(...arr) {
        console.log(...arr)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
