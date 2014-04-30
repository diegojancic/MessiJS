var gulp = require('gulp');
var clean = require('gulp-clean');
var coverage = require('gulp-coverage');
var concat = require('gulp-concat');
var coveralls = require('gulp-coveralls');
var exec = require('gulp-exec');
var eventStream = require('event-stream');
var jshint = require('gulp-jshint');
var karma = require('karma').server;
var gulpkarma = require('gulp-karma');
var minifyCSS = require('gulp-minify-css');
var mocha = require('gulp-mocha');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var runner = require('gulp-mocha-phantomjs');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var sources = ['src/*.js', 'test/*.js'];
var testfiles = [
    'jquery.min.js',
    //'http://chaijs.com/chai.js',
    //'http://cdnjs.cloudflare.com/ajax/lib/mocha/1.13.0/mocha.min.js',
    'messi.js',
    'extensions/**/*.js',
    'test/**/*.js'
];

gulp.task('clean', function() {
    gulp.src([ './messi.min.js', './messi.min.js.map', './messi.min.css', 'coverage' ])
        .pipe(clean());
});

gulp.task('combine', ['clean'], function() {
    return gulp.src(['src/main.js', 'src/extensions.js'])
        .pipe(concat('messi.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('lint', function() {
    return gulp.src(sources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', ['combine'], function(done) {
    return karma.start(
        {
            browsers: ['PhantomJS'],
            files: [
                'node_modules/mocha/mocha.js',
                'node_modules/chai/chai.js',
                'jquery.min.js',
                'messi.js',
                'test/**/*.js'
            ],
            frameworks: ['mocha'],
            preprocessors: {'messi.js': ['coverage']},
            reporters: ['progress', 'coverage', 'coveralls'],
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

gulp.task('test:gulp-karma', ['combine'], function() {
    return gulp.src(testfiles)
        .pipe(gulpkarma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            throw err; // Make sure failed tests cause gulp to exit non-zero
        });
});

gulp.task('test:coverage', ['combine'], function() {
    return gulp.src(['test/**/*.js'], {read: false})
        .pipe(coverage.instrument({
            pattern: ['test/**/*.js'],
            debugDirectory: 'debug'
        }))
        .pipe(runner({
            reporter: 'spec'
        }))
        .pipe(coverage.report({
            outFile: 'coverage.html'
        }));
});

gulp.task('compress', ['combine'], function() {
    return eventStream.merge(
        gulp.src('messi.js')
            .pipe(rename('messi.min.js'))
            .pipe(uglify({outSourceMap: true}))
            .pipe(gulp.dest('./')),

        gulp.src('messi.js')
            .pipe(rename('messi.min.js'))
            .pipe(uglify({outSourceMap: true}))
            .pipe(gulp.dest('./')),

        gulp.src('messi.css')
            .pipe(rename('messi.min.css'))
            .pipe(minifyCSS())
            .pipe(gulp.dest('./'))
    );
});

gulp.task('codecoverage', ['test'], function() {
    return gulp.src('coverage/**/lcov.info')
        .pipe(coveralls());
});

gulp.task('watch', function() {
    return gulp.watch(sources, ['default']);
});

gulp.task('notify', ['test3'], function() {
    return gulp.src('./gulpfile.js')
        .pipe(notify({ message: 'All done, master!' }));
});

gulp.task('default', ['lint', 'compress', 'test', 'notify']);

gulp.task('travis-test', ['lint', 'compress', 'test']);

