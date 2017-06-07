var gulp = require('gulp'),
    sass = require('gulp-sass'),
	plumber = require('gulp-plumber');
    sourcemaps = require('gulp-sourcemaps');
 /*
  * 说明gulp的src和dest的都是项目的根目录为相对目录
  * */

/*
 //单文件 
gulp.task('testLess', function () {
    gulp.src(['sass/demo.scss']) //多个文件以数组形式传入
        .pipe(sass())
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css以及detail.css 
});
*/


// gulp.task('sass', function () {
//   return gulp.src('./sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('html',function(){
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass',['html'],function(){
	return gulp.src('app/sass/*.scss')
	.pipe(plumber())
    .pipe(sourcemaps.init()) //这个放在sass()执行之前
    .pipe(sass())
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch',function(){
	gulp.watch('app/sass/*.scss',['sass']);
});

