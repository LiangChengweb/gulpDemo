'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

var app = {
	srcPath: 'src/',
	devPath: 'build/'
};

gulp.task('js',function(){
	gulp.src(app.srcPath + 'script/**/*.js',{base:app.srcPath})
		.pipe($.jshint())
		.pipe($.jshint.reporter("default"))
		.pipe(gulp.dest(app.devPath));
});

gulp.task('clean',function(){
	return gulp.src(app.devPath)
		.pipe($.clean());
})