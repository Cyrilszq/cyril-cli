var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var connect = require('gulp-connect');


gulp.task('default', function () {
    gulp.run('createServer', 'auto')
})

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload())
})

gulp.task('script', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})

gulp.task('minify-css', function () {
    gulp.src('./src/styles/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./dist'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})


gulp.task('auto', function () {
    gulp.watch('./src/js/*.js', ['script'])
    gulp.watch('./src/styles/*.css', ['minify-css'])
    gulp.watch('./src/*.html', ['html'])
})

gulp.task('createServer', function() {
    connect.server({
        root: 'src',
        port: 8888,
        livereload: true
    });
})