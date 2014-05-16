module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'http://cdnjs.cloudflare.com/ajax/lib/mocha/1.13.0/mocha.min.js',
            'http://chaijs.com/chai.js',
            'jquery.min.js',
            'src/main.js',
            'src/extensions.js',
            'test/**/*.js',
            'messi.css'
        ],
        frameworks: ['mocha', 'chai'],
        preprocessors: {'src/*.js': ['coverage']},
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type : 'lcov',
            dir : 'coverage/'
        },
        singleRun: true
    });
};
