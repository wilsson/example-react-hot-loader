/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}