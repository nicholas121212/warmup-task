
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}


// Reload Server
async function reload() {
  server.reload();
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
}

exports.style = style;
exports.watch = watch;
exports.default = defaultTask;



gulp.task('compress', function() {
  gulp.src(['js/*.js', 'dist/*.css'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});