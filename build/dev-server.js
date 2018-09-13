const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path')
const chalk = require('chalk')
const webpackDevConfig = require('./webpack.dev.conf')
const config = require('../config/index')

const options = {
  contentBase: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  open: true,
  host: 'localhost',
  hot: true,
  proxy: {},
  compress: true, // 开发服务器是否启动gzip等压缩
}
WebpackDevServer.addDevServerEntrypoints(webpackDevConfig, options)
const compiler = webpack(webpackDevConfig);
const app = new WebpackDevServer(compiler, options)
app.listen(config.dev.port, config.dev.host, function() {
  console.log(chalk.green("The server is starting... now to work ^_^"))
})
