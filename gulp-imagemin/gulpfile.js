var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),

    //压缩部分图片而引入的插件
    pngquant = require('imagemin-pngquant'),
    //确保本地已安装gulp-cache [cnpm install gulp-cache --save-dev]
    cache = require('gulp-cache');

// gulp.task('testImage',function(){
// 	gulp.src('src/img/*.{png,jpg,gif,ico}')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/img'));
// });

/* 
 * 只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片，
 * 没有必要压缩所有图片，使用”gulp-cache”只压缩修改的图片，
 * 没有修改的图片直接从缓存文件读取（C:\Users\Administrator\AppData\Local\Temp\gulp-cache）。
 */
//确保本地安装gulp-chache [cnpm install gulp-cache --save-dev]
gulp.task('testImagemin', function() {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});
