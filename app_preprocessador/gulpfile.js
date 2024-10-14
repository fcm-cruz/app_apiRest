const { watch, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  // body omitted
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
}

exports.default = function() {
//   You can use a single task
    watch('src/scss/*.scss', css)
};