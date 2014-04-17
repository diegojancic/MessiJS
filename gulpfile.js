var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var coveralls = require('gulp-coveralls');
var exec = require('gulp-exec');
var jshint = require('gulp-jshint');
var karma = require('karma').server;
var gulpkarma = require('gulp-karma');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var sources = ['messi.js', 'test/*.js'];
var testfiles = [
    'jquery.min.js',
    'http://chaijs.com/chai.js',
    'http://cdnjs.cloudflare.com/ajax/lib/mocha/1.13.0/mocha.min.js',
    'messi.js',
    'extensions/**/*.js',
    'test/**/*.js'
];

gulp.task('clean', function(done) {
    gulp.src([ './messi.min.js', './messi.min.js.map', './messi.min.css' ])
        .pipe(clean());

    done();
});

gulp.task('lint', function(done) {
    gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    done();
});

gulp.task('test', ['combine'], function(done) {
    return karma.start(
        {
            browsers: ['PhantomWithConfig'],
            customLaunchers: {
                PhantomWithConfig: {
                    base: 'PhantomJS',
                    options: {
                        page: {
                            viewportSize: { width: 640, height: 480 }
                        }
                    }
                }
            },
            files: [
                'http://cdnjs.cloudflare.com/ajax/lib/mocha/1.13.0/mocha.min.js',
                'http://chaijs.com/chai.js',
                'jquery.min.js',
                'messi-full.js',
                'test/**/*.js'
            ],
            frameworks: ['mocha'],
            preprocessors: {'messi-full.js': ['coverage']},
            reporters: ['progress', 'coverage'],
            coverageReporter: {
              type : 'lcov',
              dir : 'coverage/'
            },
            singleRun: true
        },
        function(exitCode) {
            done();
            gutil.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
});

gulp.task('test2', ['combine'], function(done) {
    gulp.src(testfiles)
        .pipe(gulpkarma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err; // Make sure failed tests cause gulp to exit non-zero
        })
        .on('end', done);
});

gulp.task('combine', ['clean'], function(done) {
    gulp.src(['messi.js', 'extensions/*.js'])
        .pipe(concat('messi-full.js'))
        .pipe(gulp.dest('./'));
    done();
});

gulp.task('compress', ['combine'], function(done) {
    gulp.src('messi.js')
        .pipe(rename('messi.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('./'));

    gulp.src('messi-full.js')
        .pipe(rename('messi-full.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('./'));

    gulp.src('messi.css')
        .pipe(rename('messi.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./'));

    done();
});

gulp.task('codecoverage', ['test2'], function(done) {
    setTimeout(function() {
        gulp.src('coverage/**/lcov.info')
            .pipe(coveralls());
        done();
    }, 3000);
});

gulp.task('watch', function() {
    gulp.watch(sources, ['default']);
});

gulp.task('notify', function(done) {
    gulp.src('./gulpfile.js')
        .pipe(notify({ message: 'All done, master!' }));
    done();
});

gulp.task('default', ['lint', 'compress', 'test2', 'notify']);

gulp.task('travis-test', ['lint', 'compress', 'test2', 'codecoverage']);

