'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    npmDist = require('gulp-npm-dist'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');
 

gulp.task('build-styles', () => {
    return gulp.src('src/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('copy-assets', () => {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('copy:libs', function() {
    gulp.src(npmDist(), {base: './node_modules'})
        .pipe(gulp.dest('./dist/node_modules'))
        .pipe(browserSync.stream());
});

gulp.task('copy:js', function() {
    gulp.src('src/**/*.js')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('serve', () => {
    livereload.listen();

    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('src/styles/*.scss', ['build-styles']);
    gulp.watch('src/index.html', ['copy-html']);
    gulp.watch('src/assets/**/*', ['copy-assets']);
    gulp.watch('src/**/*.js', ['copy:js']);
    gulp.watch('./node_modules', ['copy:libs']);

});

gulp.task('copy-html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('clear:dist', ()=> {

});

gulp.task('watch', ['build-styles', 'copy-html', 'copy-assets', 'copy:js','copy:libs', 'serve']);
gulp.task('build', ['build-styles', 'copy-html', 'copy-assets', 'copy:libs']);
