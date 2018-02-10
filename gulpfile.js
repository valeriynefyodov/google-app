const path         = require('path');
const del          = require('del');
const browserSync  = require('browser-sync').create();
const history      = require('connect-history-api-fallback');
const fs           = require('fs');
const mergeStreams = require('merge-stream');

const gulp        = require('gulp');
const util        = require('gulp-util');
const concat      = require('gulp-concat');
const cssUrlAdj   = require('gulp-css-url-adjuster');
const sourcemaps  = require('gulp-sourcemaps');
const plumber     = require('gulp-plumber');
const inject      = require('gulp-inject');
const webpack     = require('webpack-stream');
const cleanCSS    = require('gulp-clean-css');
const rename      = require('gulp-rename');
const notify      = require('gulp-notify');
const gulpif      = require('gulp-if');
const spritesmith = require('gulp.spritesmith');
const change      = require('gulp-change');

const root = {
    src: 'src/',
    dest: {
        public: !!util.env.production ? 'production/public/' : 'dev/',
        private: !!util.env.production ? 'production/' : 'dev/',
    }
};

const paths = {
    styles: {
        src: path.join(root.src, 'css/'),
        dest: path.join(root.dest.public, 'css/')
    },
    assets: {
        src: [path.join(root.src, '*.*'), path.join(root.src, 'img/**/static/*.*'), path.join(root.src, 'fonts/**/*.*')],
        dest: path.join(root.dest.public)
    },
    scripts: {
        src: path.join(root.src, 'script/'),
        dest: path.join(root.dest.public, 'js/')
    },
    images: {
        src: path.join(root.src, 'img/'),
        dest: path.join(root.dest.public, 'img/')
    },
    sourceMaps: path.join(root.dest.private , 'source-maps/')
};

exports.paths = paths;

const production = !!util.env.production;
const webpackConfig = production ? require('./webpack.prod') : require('./webpack.dev');




function getFolders(dir) {
    return fs.readdirSync(dir).filter((file) => {
        return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('clean', function() {
    return del([path.join(root.dest.public, '/**/'), path.join('./', root.dest.private, '**/source-maps/**/*.*')]);
});

gulp.task('clean:mess', function () {
    return del([
        path.join(paths.styles.dest, '*-sprite.css'),
        path.join(root.dest.public, '**/*.map')
    ]);
});

gulp.task('source-maps:relocate', function() {
    return gulp.src(path.join(root.dest.public, '**/*.map'), {allowEmpty: true})
            .pipe(gulp.dest(function(file) {
            file.dirname = paths.sourceMaps;
            file.base = paths.sourceMaps;
            return paths.sourceMaps
        }));
});

gulp.task('sprites', function() {
    let folders = getFolders(paths.images.src);

    let pagesSprite = folders.map(function (folder) {

        let folderLower = folder.toLowerCase();

        return gulp.src(path.join(paths.images.src, folder, '/*.*'))
            .pipe(plumber({
                errorHandler: notify.onError(function (error) {
                    return {
                        title: 'Error: '+ folder +' sprite',
                        message: error.message
                    }
                })
            }))
            .pipe(spritesmith({
                imgName: folderLower + '-sprite.png',
                cssName: folderLower + '-sprite.css',
                imgPath: '../img/' + folder + '/' + folderLower + '-sprite.png',
                cssOpts: {
                    cssSelector: function (sprite) {
                        return '.' + folderLower + '__sprite_' + sprite.name;
                    }
                }
            }))
            .pipe(gulpif('*.css', gulp.dest(paths.styles.dest)))
            .pipe(gulpif('*.png', gulp.dest(path.join(paths.images.dest, folder))));
    });

    let mainSprite = gulp.src(path.join(paths.images.src, '/*.*'))
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: 'Error: Main sprite',
                    message: error.message
                }
            })
        }))
        .pipe(spritesmith({
            imgName: 'main-sprite.png',
            cssName: 'main-sprite.css',
            imgPath: '../img/main-sprite.png',
            cssOpts: {
                cssSelector: function (sprite) {
                    return '.main__sprite_' + sprite.name;
                }
            }
        }))
        .pipe(gulpif('*.css', gulp.dest(paths.styles.dest)))
        .pipe(gulpif('*.png', gulp.dest(paths.images.dest)));

    return mergeStreams(pagesSprite, mainSprite);
});

gulp.task('styles', function() {
    let folders = getFolders(paths.styles.src);

    let pagesStyles = folders.map((folder) => {
        return gulp.src([path.join(paths.styles.src, folder, '/**/*.css'), path.join(paths.styles.dest, folder.toLowerCase() + '-sprite.css')], {allowEmpty: true})
            .pipe(plumber({
                errorHandler: notify.onError(function (error) {
                    return {
                        title: 'Error: Pages styles',
                        message: error.message
                    }
                })
            }))
            .pipe(sourcemaps.init())
            .pipe(cssUrlAdj({
                replace: ['../../', '../']
            }))
            .pipe(cssUrlAdj({
                replace: ['static/', '']
            }))
            .pipe(concat(folder.toLowerCase() + '.css'))
            .pipe(gulpif(production, cleanCSS()))
            .pipe(gulpif(production, sourcemaps.write('./'), sourcemaps.write()))
            .pipe(change(function(content) {
                return content.replace(/\bsourceMappingURL=\b/g, 'sourceMappingURL=' + paths.sourceMaps);
            }))
            .pipe(gulpif(production, rename({suffix: '.min'})))
            .pipe(gulp.dest(paths.styles.dest))
    });

    let mainStyles = gulp.src(path.join(paths.styles.src, '/*.css'))
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: 'Error: Main styles',
                    message: error.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(gulpif(production, cleanCSS()))
        .pipe(gulpif(production, sourcemaps.write('./'), sourcemaps.write()))
        .pipe(gulpif(production, rename({suffix: '.min'})))
        .pipe(gulp.dest(paths.styles.dest));

    return mergeStreams(pagesStyles, mainStyles);
});

gulp.task('assets', function () {
    return gulp.src(paths.assets.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: 'Error: Assets',
                    message: error.message
                }
            })
        }))
        .pipe(gulp.dest(function(file) {
            let filePath = file.dirname.split(path.sep);
            let dirName  = filePath[filePath.length - 1];

            if (dirName === 'static') {
                filePath.splice(filePath.indexOf(dirName), 1);
                file.dirname = filePath.join(path.sep);
            }

            file.base = root.src;
            return root.dest.public
        }));
});

gulp.task('inject', function() {
    let sources = gulp.src([path.join(paths.scripts.dest, '**/*.js'), path.join(paths.styles.dest, '**/*.css'), '!' + path.join(paths.styles.dest, '**/*-sprite.css')], {read: false});

    return gulp.src(path.join(root.dest.public, 'index.html'))
        .pipe(inject(sources, {ignorePath: root.dest.public, addRootSlash: false}))
        .pipe(gulp.dest('./'));
});

gulp.task('webpack', function() {
    return gulp.src(path.join(paths.scripts.src, 'index.js'))
        .pipe(plumber({
            errorHandler: notify.onError(function (error) {
                return {
                    title: 'Error: Scripts',
                    message: error.message
                }
            })
        }))
        .pipe(webpack(webpackConfig))
        .pipe(change(function(content) {
            return content.replace(/\bsourceMappingURL=\b/g, 'sourceMappingURL=' + paths.sourceMaps);
        }))
        .pipe(gulpif(production, gulpif('*.js', rename({suffix: '.min'}))))
        .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('watch', function() {
    gulp.watch(paths.assets.src, gulp.series('assets'));
    gulp.watch(path.join(paths.styles.src, '**/*.css'), gulp.series('sprites', 'styles', 'clean:mess'));
    gulp.watch(path.join(paths.scripts.src, '**/*.js'), gulp.series('webpack'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: root.dest.public,
            middleware: history({})
        }
    });

    browserSync.watch(path.join(root.dest.public, '/**/*.*')).on('change', browserSync.reload);
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', gulp.series('sprites', 'styles'), 'webpack'), 'inject', 'source-maps:relocate', 'clean:mess'));

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));