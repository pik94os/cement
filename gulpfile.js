'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    runSequence = require('run-sequence'),
    refresh = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        js: 'public/js/',
        bower_js: 'public/bower_components/',
        css: 'public/css/',
        img: 'public/img/',
        fonts: 'public/fonts/'
    },
    src: { //Пути откуда брать исходники
        js: 'front/js/**/*.*',
        bower_js: 'front/bower_components/**/*.js',
        style: 'front/style/main.scss',
        img: 'front/img/**/*.*',
        fonts: 'front/bower_components/bootstrap-sass/assets/fonts/**/*.*'
    }
};

gulp.task('sass', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(refresh(server))
});

gulp.task("js", function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
        .pipe(refresh(server))
});

gulp.task("bower_js", function () {
    gulp.src(path.src.bower_js)
        .pipe(gulp.dest(path.build.bower_js))
        .pipe(refresh(server))
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});

gulp.task('image', function() {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.build.img));
});

gulp.task("fonts", function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('default', function(cb) {
    runSequence(['lr-server', 'js', 'bower_js', 'sass', 'image'], cb);

    gulp.watch(path.src.js, function(event) {
        runSequence(['js'], cb);
    });

    gulp.watch(path.src.bower_js, function(event) {
        runSequence(['bower_js'], cb);
    });

    gulp.watch(path.src.style, function(){
        runSequence(['sass'], cb);
    })

    gulp.watch(path.src.img, function(){
        runSequence(['image'], cb);
    })
});