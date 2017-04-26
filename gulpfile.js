var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    path = require('path'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

    gulp.task('sass', function() {
      return gulp.src('./src/styles/base.scss')
      // .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      // .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/app'}))
      .pipe(autoprefixer({
        browsers: ['last 2 version', "> 1%", 'ie 8', 'ie 9'],
        cascade: false
      }))
      .pipe(gulp.dest('./src/'))
      .pipe(browserSync.stream());
    });

    gulp.task('browserify', function() {
      return browserify('./src/scripts/bundle.js')
      .bundle()
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
    });


gulp.task('serve', function() {
  gulp.watch(['./src/styles/**/*.scss'], ['sass']);
//   gulp.watch(['./assets/js/*.js', './components/**/*.js'], ['browserify']);
});

gulp.task('default', ['serve', 'sass']);
