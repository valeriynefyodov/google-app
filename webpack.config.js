const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/script/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, "node_modules")],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};