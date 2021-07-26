const path = require('path');

module.exports = {
    //入口文件
  entry: './src/index.js',
  //出口
  output: {
    publicPath: 'xuni',
    filename: 'bundle.js',
  },
  //服务器配置
  devServer: {
      //端口号
      port: 8080,
      //静态资源文件夹
      contentBase: 'www'
  }
};