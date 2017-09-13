let webpack = require('webpack');
module.exports = {
    entry: "./app/js/index.js",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap'


}