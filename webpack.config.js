
module.exports = {
    entry: "./app/js/index.js",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        }
    },
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    plugins: [

    ]


}