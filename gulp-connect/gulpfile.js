var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();
	open = require('open');

var app = {
	srcPath: 'src/',
	devPath: 'build/',
};

gulp.task('html',function(){
	gulp.src(app.srcPath + '**/*.html')
		.pipe($.connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(app.srcPath + '**/*.html',['html']);
});

gulp.task('default',['html','watch'],function(){
	$.connect.server({
		root: app.srcPath,
		livereload: true,
		port: 1234 //这里的端口与下面的open保持一致
	});

	/*
	 * open(param1,param2)
	 * param1 str url
	 * param2 str browserName
	 */
	open('http://192.168.0.200:1234','chrome');
});