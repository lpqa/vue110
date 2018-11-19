const path = require('path');
//启用热更新
// const webpack = require('webpack');
//导入内存中生成HTML的插件
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')
module.exports = {
  //入口文件地址
  entry:path.join(__dirname,"./src/main.js"),
  output:{
    //编译出口文件地址
    path:path.join(__dirname,"./dist"),
    filename:'bundle.js'
  },

  // devServer:{
  //   open:true,//自动打开浏览器
  //   port:3000,//端口号
  //   contentBase:'src',//指定托管的根目录
  //   hot:true,//启动热更新
  // },
  plugins://配置插件节点
    [
      new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),//指定模版页面会根据指定的页面路径，去生成内存中的 页面
        filename:'index.html',
      }),
      new VueLoaderPlugin()
    ],
  module:{//这个节点，用于配置 所有 第三方模块 加载器
    rules:[//所有第三方模块的配置规则
      {test:/\.css$/,use:['style-loader','css-loader']},//配置处理.css的 文件的第三方loader 规则
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 scss 文件的 loader
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
      {test:/\.vue$/,use:'vue-loader'}
    ]
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      "vue$": "vue/dist/vue.js"
    }
  },
  mode:"development"
}