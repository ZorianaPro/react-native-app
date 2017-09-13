let webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './dist/js/index.js'
    ],
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