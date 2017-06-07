var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var app = {
    srcPath: 'src/',
    devPath: 'build/'
};

gulp.task('js', function() {
    return gulp.src(app.srcPath + 'script/**/*.js', { base: app.srcPath })
        .pipe($.plumber())
        .pipe($.jshint())
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(app.devPath));
});

gulp.task('html', function() {
    return gulp.src(app.srcPath + '**/*.html', { base: app.srcPath })
        .pipe(gulp.dest(app.devPath));
});

gulp.task('clean', function() {
    return gulp.src(app.devPath)
        .pipe($.clean());
});

// 监听
gulp.task('watch', function() {
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
});

gulp.task('build', ['js', 'html']);

gulp.task('default', ['build', 'watch'], function() {
    return gulp.src(app.devPath)
        .pipe($.webserver({
            livereload: true,
            open: true,
            port: 2333
        }));
});
