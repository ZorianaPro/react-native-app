let webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './app/js/index.js'
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    },

    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',

    plugins:[

    ]

}


module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        './js/index.js'
    ],
    module: {
        loaders: [

            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            }
        ]
    },
    output: {
        path: __dirname + "/public/",
        publicPath: "public/",
        filename: 'bundle.js'
    },
    devtool: '#sourcemap'


}