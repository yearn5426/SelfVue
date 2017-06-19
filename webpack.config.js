/**
 * Created by ym on 2017/6/14.
 */

/*
*   Remark
*   __dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
*   webpack常用命令
*   -w #提供watch方法，实时进行打包更新
*   -p #对打包后的文件进行压缩
*   -d #提供SourceMaps，方便调试
*   --progress #提供编译进度
*   --colors #输出结果带彩色，比如：会用红色显示耗时较长的步骤
*   --profile #输出性能数据，可以看到每一步的耗时
*   --display-modules #默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
*   css-loader使你能够使用类似@import和url(...)的方法实现require()的功能
*   style-loader将所有计算后的样式加入页面中
*   autoprefixer 自动添加css前缀
*
*/

var Webpack = require('webpack');
var path = require('path');
var rootPath = path.resolve(__dirname);
// var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    // entry: ['./src/main.js', hotMiddlewareScript],
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
        // publicPath: publicPath
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader',
                    sass: 'vue-style-loader!css-loader?sourceMap!sass-loader?indentedSyntax&sourceMap',
                    scss: 'vue-style-loader!css-loader?sourceMap!sass-loader?sourceMap'
                },
                preloaders: {
                    css: 'autoprefixer'
                }

            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.js$/,
            include: [
                path.join(rootPath, 'src')
            ],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'sass-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    devtool: 'eval-source-map',
    plugins: [
        // new Webpack.BannerPlugin("这里是打包头部注释！"),
        new Webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true
    },
    resolve: {
        extensions: [ '.js', '.vue'],
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'components': path.join(rootPath, 'src/components')
        }
    }
}