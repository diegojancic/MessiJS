var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var sources = ['messi.js', 'test/*.js'];

gulp.task('clean', function() {
    gulp.src([
            './messi.min.js',
            './messi.min.js.map',
            './messi.min.css'
        ])
        .pipe(clean());
});

gulp.task('lint', function() {
    gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
    gulp.src('test/*.js')
        .pipe(mocha({reporter: 'nyan'}))
        .on('error', function(err) {
            console.log(err.toString());
        });
});

gulp.task('compress', ['clean'], function() {
    gulp.src('messi.js')
        .pipe(rename('messi.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('./'));
    gulp.src('messi.css')
        .pipe(rename('messi.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.src(sources)
        .pipe(watch(function(files) {
            return files.pipe(jshint())
                .pipe(gulp.dest('.'));
        }));
});

gulp.task('default', ['lint', 'compress', 'test']);

