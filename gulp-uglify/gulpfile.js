var gulp = require('gulp'),
	uglify = require('gulp-uglify');

// gulp.task('jsmin',function(){
// 	gulp.src('src/js/index.js')
// 		.pipe(uglify())
// 		.pipe(gulp.dest('dist/js'));
// });




// var gulp = require('gulp'),
//     uglify= require('gulp-uglify');
 
// gulp.task('jsmin', function () {
//     //压缩src/js目录下的所有js文件
//     //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
//     gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js']) 
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// var gulp = require('gulp'),
//     uglify= require('gulp-uglify');
 
// gulp.task('jsmin', function () {
//     //压缩src/js目录下的所有js文件
//     //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
//     gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js']) 
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });


var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
        .pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            preserveComments: 'all' //保留所有注释 测试无效
        }))
        .pipe(gulp.dest('dist/js'));
});