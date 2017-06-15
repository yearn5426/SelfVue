/**
 * Created by ym on 2017/6/14.
 */
var Webpack = require('webpack');

var path = require('path');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new Webpack.BannerPlugin("这里是打包头部注释！")
    ]
}