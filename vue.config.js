const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('assets', path.resolve('./src/assets'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  }
}
