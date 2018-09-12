const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path')
const chalk = require('chalk')
const webpackDevConfig = require('./webpack.dev.conf')
const config = require('../config/index')

const compiler = webpack(webpackDevConfig);
const app = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  open: true,
  hot: true,
  proxy: {},
  compress: true, // 开发服务器是否启动gzip等压缩
})
app.listen(config.dev.port, config.dev.host, function() {
  console.log(chalk.green("The server is start... now to work ^_^"))
})
