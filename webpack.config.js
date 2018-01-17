const path = require('path');
// import paths from './gulpfile';

const paths = {
    assets: ['src/*.*', 'src/{img,fonts}/**/*.*'],
    favicon: 'src/favicon.ico',
    styles: 'src/css/',
    scripts: 'src/script/',
    build: 'public/'
};

module.exports = {
    entry: path.resolve(__dirname, path.join(paths.scripts, '/index.js')),
    output: {
        path: path.resolve(__dirname,  path.join(paths.build, '/js/')),
        filename: 'bundle.js'
    },
    watch: true,
    devtool: 'source-map',
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