const path        = require('path');
const del         = require('del');
const browserSync = require('browser-sync').create();
const webpack     = require('webpack');
const history     = require('connect-history-api-fallback');

const gulp       = require('gulp');
const concat     = require('gulp-concat-multi');
const cssUrlAdj  = require('gulp-css-url-adjuster');
const sourcemaps = require('gulp-sourcemaps');
const gutil      = require('gulp-util');

gulp.task('clean', function() {
    return del('public/**/');
});

gulp.task('styles', function() {
    return concat({
        'google.css': 'src/css/Google/*.css',
        'brandname.css': 'src/css/BrandName/*.css',
        'portfolio.css': 'src/css/Portfolio/*.css',
        'images.css': 'src/css/Images/*.css',
    })
        .pipe(sourcemaps.init())
        .pipe(cssUrlAdj({
            replace: ['../../', '../']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('assets', function () {
    return gulp.src(['src/{img,fonts}/**/*.*', 'src/favicon.ico', 'src/index.html'])
        .pipe(gulp.dest(function(file) {
            file.base = 'src/';
            return 'public/'
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
    gulp.watch(['src/{img,fonts}/**/*.*', 'src/favicon.ico', 'src/index.html'], gulp.series('assets'));
    gulp.watch('src/css/**/*.css', gulp.series('styles'));
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './public/',
            middleware: history({})
        }
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', 'assets', gulp.parallel('styles', 'webpack')));
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));

gulp.task('styles:test', gulp.series('clean', 'stylesDev'));

// let relDirName = file.dirname.split(path.sep);
// filename = relDirName[relDirName.length - 1].toLowerCase();
// gutil.log(filename);