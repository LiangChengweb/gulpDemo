var gulp = require('gulp'),
	compass = require('gulp-compass');
 
gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './src/stylesheets',
      sass: './src/sass'
    }))
    .pipe(gulp.dest('app/css'));
});