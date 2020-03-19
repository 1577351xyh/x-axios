const path = require('path')

module.exports = function (env = {}) {
  //true开发版
  const dev = env.dev;

  return {
    //development开发版
    mode: dev ? 'development' : 'production',
    //入口
    // entry: './src/index.js', 
    //babel/polyfill处理es6识别不了的babel,比如acsyn
    entry: dev ? ['@babel/polyfill', './src/index.js'] : './src/axios.js',
    //结果文件
    output: {
      //生成路径
      path: path.resolve(__dirname, 'dist'),
      //文件名
      filename: dev ? 'Xaxios.js' : 'Xaxios.min.js',
      //输出的文件名(便于调试)
      sourceMapFilename: dev ? 'Xaxios.map' : 'Xaxios.min.map',
      //成品出去是什么格式(作为模块)
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.js$/i, use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        }
      ]
    },
    devtool: 'source-map',
    //热更新
    devServer: {
      port: 8000,
      open: true
    }
  }
}