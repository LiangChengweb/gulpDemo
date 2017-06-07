'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

var app = {
	srcPath: 'src/',
	devPath: 'build/'
};

gulp.task('sass',function(){
	return gulp.src(app.srcPath+'styles/*.scss')
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass())
		//这里加了./ 表示生成的.map文件
		.pipe($.sourcemaps.write('./'))

		/*//处理错误
		.on('error', function(err) {
            $.util.log('Less Error!', err.message);
            this.end();
        })*/

		.pipe(gulp.dest(app.devPath + 'css'));
		//单独使用livereload监听
		//.pipe($.livereload());
});

gulp.task('html',function(){
	return gulp.src(app.srcPath + '**/*.html')
		.pipe(gulp.dest(app.devPath));
});

gulp.task('clean',function(){
	return gulp.src(app.devPath)
		.pipe($.clean());
});


// 监听
gulp.task('watch',function(){
    gulp.watch(app.srcPath + 'styles/*.scss', ['sass']);
    gulp.watch(app.srcPath + '**/*.html', ['html']) 
});

gulp.task('build',['sass','html']);
 
//默认任务
gulp.task('default',['build','watch'],function(){
	return gulp.src(app.devPath) // 服务器目录（./代表根目录）
	.pipe($.webserver({ // 运行gulp-webserver
		livereload: true, // 启用LiveReload，去掉f5刷新的痛点
		open: true, // 服务器启动时自动打开网页
		port: 1234
	}));
});