const path = require('path')
const autoprefixer = require('autoprefixer')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  // 开发端口
  devServer: {
    port: 9977
  },
  // 输出文件目录
  outputDir: 'dist',
  // 文档 https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    }
  }
}
