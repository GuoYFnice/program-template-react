const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  // * dev 下代码错误报告。
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    /* 
     启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见  (默认不启用)
     */
    quiet: false,
    // 默认开启 inline 模式，如果设置为false,开启 iframe 模式
    inline: true,
    // 终端仅打印 error
    stats: 'errors-only',
    // 默认不启用 -当编译出错时，会在浏览器窗口全屏输出错误
    overlay: false,
    // 日志等级
    clientLogLevel: 'silent',
    // 是否启用 gzip 压缩
    compress: true,
    open: true,
    // 热更新
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    // * 热更新第二步：引入插件，此时会全量更新；需要局部更新要在入口文件进一步设置。
    new webpack.HotModuleReplacementPlugin()
  ]
});
