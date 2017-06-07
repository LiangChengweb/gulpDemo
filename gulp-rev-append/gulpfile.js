//使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
var gulp = require('gulp'),
    rev = require('gulp-rev-append');
 
gulp.task('testRev', function () {
    gulp.src('src/html/index.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/html'));
});