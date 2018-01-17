const path         = require('path');
const del          = require('del');
const browserSync  = require('browser-sync').create();
const webpack      = require('webpack');
const history      = require('connect-history-api-fallback');
const fs           = require('fs');
const mergeStreams =  require('merge-stream');

const gulp       = require('gulp');
const concat     = require('gulp-concat');
const cssUrlAdj  = require('gulp-css-url-adjuster');
const sourcemaps = require('gulp-sourcemaps');
const gutil      = require('gulp-util');
const plumber    = require('gulp-plumber');
const notify     = require('gulp-notify');

const paths = {
    assets: ['src/*.*', 'src/{img,fonts}/**/*.*'],
    favicon: 'src/favicon.ico',
    styles: 'src/css/',
    scripts: 'src/script/',
    build: 'public/'
};

function getFolders(dir) {
    return fs.readdirSync(dir).filter((file) => {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('clean', function() {
    return del('public/**/');
});

gulp.task('styles', function() {
    let folders = getFolders(paths.styles);

    let pagesStyles = folders.map((folder) => {
        return gulp.src(path.join(paths.styles, folder, '/**/*.*'))
            .pipe(plumber({errorHandler: notify.onError()}))
            .pipe(sourcemaps.init())
            .pipe(cssUrlAdj({
                replace: ['../../', '../']
            }))
            .pipe(concat(folder.toLowerCase() + '.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.join(paths.build, '/css')))
    });

    let mainStyles = gulp.src(path.join(paths.styles, '/*.css'))
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(paths.build, '/css')));

    return mergeStreams(pagesStyles, mainStyles);
});

gulp.task('assets', function () {
    return gulp.src(paths.assets)
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(gulp.dest(function(file) {
            file.base = 'src/';
            return paths.build
        }));
});

gulp.task('webpack', function(callback) {
    return webpack(require('./webpack.config.js'), function(err, stats) {
        if(err)
            throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.assets, gulp.series('assets'));
    gulp.watch(path.join(paths.styles, '/**/*.css'), gulp.series('styles'));
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: paths.build,
            middleware: history({})
        }
    });

    browserSync.watch(path.join(paths.build, '/**/*.*')).on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', 'assets', gulp.parallel('styles', 'webpack')));
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));