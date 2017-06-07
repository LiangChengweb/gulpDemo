var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    // source = require("vinyl-source-stream"),
    plumber = require('gulp-plumber');

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', ['html'], function() {
    return gulp.src('app/sass/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init()) //这个放在sass()执行之前
        .pipe(sass())
        .pipe(sourcemaps.write())

        
        .on('error', function(err) {
            gutil.log('Less Error!', err.message);
            this.end();
        })

        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('app/sass/*.scss', ['sass']);
});
