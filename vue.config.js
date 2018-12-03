const path = require('path')
const autoprefixer = require('autoprefixer')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // eslint
  lintOnSave: true,
  // 开发端口
  devServer: {
    port: 9977
  },
  // 输出文件目录
  outputDir: 'dist',
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 样式
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    }
  },
  // 文档 https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
