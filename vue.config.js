const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'));
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://manager-master.showcode.info',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
