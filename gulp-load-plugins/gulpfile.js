var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

var app = {
	srcPath : 'src/',
	devPath : 'build/',
	prdPath : 'dist/'
}

gulp.task('js',function(){
	gulp.src(app.srcPath + 'js/**/*.js')
		.pipe($.concat("index.js"))
		.pipe(gulp.dest(app.devPath + 'js'))
		.pipe($.uglify())
		.pipe(gulp.dest(app.prdPath + 'js'));
})

