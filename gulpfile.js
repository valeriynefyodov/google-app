const gulp = require('gulp');
const concat  = require('gulp-concat');
const cssUrlAdj = require('gulp-css-url-adjuster');
const del = require('del');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const gutil = require('gulp-util');

gulp.task('clean', function() {
    return del('public/**/');
});

gulp.task('styles', function(callback) {
    gulp.src('src/css/BrandName/*.css')
        .pipe(cssUrlAdj({
            replace: ['../../', '../']
        }))
        .pipe(concat('brandname.css'))
        .pipe(gulp.dest('public/css/'));

    gulp.src('src/css/Google/*.css')
        .pipe(cssUrlAdj({
            replace: ['../../', '../']
        }))
        .pipe(concat('google.css'))
        .pipe(gulp.dest('public/css/'));

    gulp.src('src/css/Images/*.css')
        .pipe(cssUrlAdj({
            replace: ['../../', '../']
        }))
        .pipe(concat('images.css'))
        .pipe(gulp.dest('public/css/'));

    gulp.src('src/css/Portfolio/*.css')
        .pipe(cssUrlAdj({
            replace: ['../../', '../']
        }))
        .pipe(concat('portfolio.css'))
        .pipe(gulp.dest('public/css/'));

    callback();
});

gulp.task('assets', function (callback) {
    gulp.src(['src/{img,fonts}/**/*.*', 'src/favicon.ico', 'src/index.html'])
        .pipe(gulp.dest(function(file) {
            file.base = 'src/';
            return 'public/'
        }));

    callback();
});

gulp.task('webpack', function(callback) {
    return webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
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
        server: './public/'
    });

    gulp.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', 'assets', gulp.parallel('styles', 'webpack')));
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
