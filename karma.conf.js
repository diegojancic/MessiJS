module.exports = function(config) {

    config.set({
        browsers: ['PhantomJS'],
        coverageReporter: { type : 'lcov', dir : 'coverage/' },
        files: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'jquery.min.js',
            'src/main.js',
            'src/extensions.js',
            'test/**/*Spec.js',
            'src/*.css'
        ],
        frameworks: ['mocha'],
        preprocessors: {'src/*.js': ['coverage']},
        reporters: ['progress', 'coverage', 'coveralls'],
        singleRun: true
    });

};
