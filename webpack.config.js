const path = require('path');
const paths = require('./gulpfile').paths;

module.exports = {
    entry: path.resolve(__dirname, path.join(paths.scripts.src, 'index.js')),
    output: {
        path: path.resolve(__dirname,  paths.scripts.dest),
        filename: 'bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, 'node_modules')],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};