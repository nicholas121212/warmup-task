
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const minifyCss = require('gulp-clean-css');



function defaultTask(cb) {cb();
}
function style(){
  return gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
}
function watch(){
 browserSync.init({
  server:{ baseDir:'./'}
 });
 gulp.watch('./sass/*.scss', style);
 gulp.watch('./*.html').on('change', browserSync.reload);
 gulp.watch('./js/*.js').on('change', browserSync.reload);
 gulp.watch('./dist/*.css',bundleCss);
  gulp.watch('./js/*.js',compress);
}

exports.style = style;
exports.watch = watch;
exports.default = defaultTask;

const compress = () => {
   return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/minifiedJs/'));
}

exports.compress = compress;

const bundleCss = () => {
  return gulp.src('./dist/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('./dist/minifiedCss/'));
}

exports.bundleCss = bundleCss;