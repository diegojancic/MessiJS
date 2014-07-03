var pkg = require('./package.json');

var gulp = require('gulp');
var clean = require('gulp-clean');
var coverage = require('gulp-coverage');
var concat = require('gulp-concat');
var coveralls = require('gulp-coveralls');
var eventStream = require('event-stream');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var karma = require('gulp-karma');
var minifyCSS = require('gulp-minify-css');
var mocha = require('gulp-mocha');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var runner = require('gulp-mocha-phantomjs');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var gutil = require('gulp-util');

var sources = ['src/*.js', 'test/*Spec.js'];

var banner = [
    '/**!',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version <%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' * @copyright Copyright 2012-13 Marcos Esperón',
    ' * @copyright Copyright 2014 Kevin Gustavson',
    ' */',
    ''].join('\n');

gulp.task('clean', function() {
    gulp.src([ 'dist/*', 'coverage' ])
        .pipe(clean());
});

gulp.task('lint', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('create-dist', ['clean'], function() {
    gutil.File({ path: 'dist/' });
    return gulp.src(['README.md'])
        .pipe(gulp.dest('dist'));
});

gulp.task('combine:css', ['create-dist'], function() {
    return gulp.src(['src/*.css'])
        .pipe(concat('messi.css'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('combine', ['clean', 'combine:css'], function() {
    return gulp.src(['src/main.js', 'src/extensions.js'])
        .pipe(concat('messi.js'))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', ['combine'], function() {
    return eventStream.merge(
        gulp.src('dist/messi.js')
            .pipe(rename('messi.min.js'))
            .pipe(uglify({outSourceMap: false}))
            .pipe(header(banner, { pkg: pkg }))
            .pipe(gulp.dest('dist')),

        gulp.src('dist/messi.css')
            .pipe(rename('messi.min.css'))
            .pipe(minifyCSS())
            .pipe(header(banner, { pkg: pkg }))
            .pipe(gulp.dest('dist'))
    );
});

gulp.task('test', ['combine'], function() {
    return gulp.src([
        'node_modules/mocha/mocha.js',
        'node_modules/chai/chai.js',
        'jquery.min.js',
        'src/main.js',
        //'src/extensions.js',
        'test/mainSpec.js',
        //'test/privateFunctionsSpec.js',
        //'test/extensionsSpec.js',
        //'test/todoSpec.js',
        'src/*.css'
    ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('coveralls', ['test'], function() {
    return gulp.src('coverage/**/lcov.info')
        .pipe(coveralls());
});

gulp.task('zip', ['compress'], function() {
    return gulp.src('dist/*')
        .pipe(zip('MessiJS.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(sources, ['default']);
});

gulp.task('notify:test', ['test'], function() {
    return gulp.src('./gulpfile.js')
        .pipe(notify({ message: 'All done, master!' }));
});

gulp.task('notify:zip', ['zip'], function() {
    return gulp.src('./gulpfile.js')
        .pipe(notify({ message: 'Zip file has been created.' }));
});

gulp.task('default', ['lint', 'zip', 'test']);

gulp.task('travis-test', ['lint', 'coveralls']);

