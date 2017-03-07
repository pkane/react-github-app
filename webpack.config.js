var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: './build/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[hash:base64:5]!postcss-loader'
            }
        ]
    },
    devServer: {
        port: 3001,
        contentBase: './build/',
        historyApiFallback: true,
        inline: true,
        stats: 'errors-only'
    }
};
