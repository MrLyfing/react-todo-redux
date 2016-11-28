/**
 * Created by Lyfing on 15/10/2016.
 */

var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'] //react-html-attrs : Transforms JSX class attributes into className
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};