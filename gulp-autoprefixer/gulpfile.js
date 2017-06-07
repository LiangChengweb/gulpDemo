var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('testAutoFx', function() {
    gulp.src('src/css/index.css')
        .pipe(autoprefixer({
        	//browser 的第一个参数浏览器的版本，第二个是操作系统
            browsers: ['last 2 versions', 'Android >= 4.0','Firefox > 20','not ie <= 8'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/css'));
});
