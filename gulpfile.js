var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    return gulp.run('script', 'minify-css')
});

gulp.task('script', function () {
    return gulp.src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('minify-css', function () {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task('auto', function () {
    gulp.watch('js/*.js', ['script'])
})