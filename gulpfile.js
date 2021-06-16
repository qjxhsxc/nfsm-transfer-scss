const gulp = require('gulp')

function build() {
  const sass = require('gulp-sass');
  const postcss = require('gulp-postcss');
  const minifyCSS = require('gulp-minify-css')

  return gulp.src('src/scss/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe( postcss([require('autoprefixer')]))
      .pipe(minifyCSS())
      .pipe(gulp.dest('output/'))
}

exports.default = build

