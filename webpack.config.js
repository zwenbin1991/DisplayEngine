// webpack配置文件
// author: 法克
// date: 2016-5-15 11:27

'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app.js')
    ],

    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: 'node_modules',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css/,
                loader: 'style!css'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.css']
    }
};