
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

function defaultTask(cb) {
  // place code for your default task here
  cb();
}


const paths = {
  scripts: {
    src: './',
    dest: './build/'
  }
};

// Reload Server
async function reload() {
  server.reload();
}

// Copy assets after build
async function copyAssets() {
  gulp.src(['assets/**/*'])
    .pipe(gulp.dest(paths.scripts.dest));
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await copyAssets();
  reload();
}

function includeHTML(){
  return gulp.src([
    '*.html',
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}
exports.includeHTML = includeHTML;

// exports.default = async function() {
//   // Init serve files from the build folder
//   server.init({
//     server: {
//       baseDir: paths.scripts.dest
//     }
//   });
//   // Build and reload at the first time
//   buildAndReload();
//   // Watch task
//   watch(["*.html","assets/**/*"], series(buildAndReload));
// };



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
exports.default = defaultTask
