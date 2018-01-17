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
const inject     = require('gulp-inject');

const root = {
    src: 'src/',
    dest: 'public/'
};

const paths = {
    styles: {
        src: path.join(root.src, 'css/'),
        dest: path.join(root.dest, 'css/')
    },
    assets: {
        src: [path.join(root.src, '*.*'), path.join(root.src, '{img,fonts}/**/*.*')],
        dest: path.join(root.dest)
    },
    scripts: {
        src: path.join(root.src, 'script/'),
        dest: path.join(root.dest, 'js/')
    }
};

exports.paths = paths;


function getFolders(dir) {
    return fs.readdirSync(dir).filter((file) => {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}


gulp.task('clean', function() {
    gutil.log(paths);
    return del(path.join(root.dest, '/**/'));
});

gulp.task('styles', function() {
    let folders = getFolders(paths.styles.src);

    let pagesStyles = folders.map((folder) => {
        return gulp.src(path.join(paths.styles.src, folder, '/**/*.css'))
            .pipe(plumber({errorHandler: notify.onError()}))
            .pipe(sourcemaps.init())
            .pipe(cssUrlAdj({
                replace: ['../../', '../']
            }))
            .pipe(concat(folder.toLowerCase() + '.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
    });

    let mainStyles = gulp.src(path.join(paths.styles.src, '/*.css'))
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest));

    return mergeStreams(pagesStyles, mainStyles);
});

gulp.task('assets', function () {
    return gulp.src(paths.assets.src)
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(gulp.dest(function(file) {
            file.base = root.src;
            return root.dest
        }));
});

gulp.task('inject', function() {
    let sources = gulp.src([path.join(paths.scripts.dest, '**/*.js'), path.join(paths.styles.dest, '**/*.css')], {read: false});

    return gulp.src(path.join(root.dest, 'index.html'))
        .pipe(inject(sources, {ignorePath: root.dest, addRootSlash: false}))
        .pipe(gulp.dest('./'));
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
    gulp.watch(paths.assets.src, gulp.series('assets'));
    gulp.watch(path.join(paths.styles.src), gulp.series('styles'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: root.dest,
            middleware: history({})
        }
    });

    browserSync.watch(path.join(root.dest, '/**/*.*')).on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'styles', 'webpack'), 'inject'));
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));