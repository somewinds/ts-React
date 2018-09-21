const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 本地环境 api 配置 改动需重新运行
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API : '"http://hz.lanhanba.net"'
  // BASE_API : '"http://linhui.com"'
  // BASE_API : '"http://api.lanhanba.com"'
  // BASE_API : '"http://jiangliangping.com"',
  // BASE_API : '"http://www.wolf.com"',
  // BASE_API : '"http://ll.vaiwan.com"'
  // BASE_API: '"http://192.168.0.123"'
  // BASE_API: '"http://192.168.0.196"'
})
