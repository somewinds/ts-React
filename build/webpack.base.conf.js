const path = require('path')
const config = require('../config')
const utils = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production'

const webpackConfig = {
  mode:  devMode ? 'development' : 'production',
  entry: {
    app: './src/main.tsx'
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.json'],
    alias: {
      "@src": path.join(__dirname, '..', 'src'),
      "view": path.join(__dirname, '..', 'src/view'),
      "@": path.join(__dirname, '..', 'src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, '..', 'src')],
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          useBabel: true,
          babelOptions: {
            babelrc: false /* Important line */,
            presets: ['react', 'stage-2'], // 关闭 Babel 的模块转换功能，保留原本的 ES6 模块化语法
            plugins: ['transform-runtime', 'react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.jsx?$/, // 用babel编译jsx和es6
        include: [path.join(__dirname, '..', 'src')], // 指定检查的目录
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

module.exports = webpackConfig
