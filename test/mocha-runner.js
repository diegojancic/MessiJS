/*jshint -W020 */
/*jshint -W117 */
// globals
jsdom = require('jsdom');
//document = jsdom.jsdom('<html><head><script></script></head><body></body></html>');
document = jsdom.jsdom('index.html');

//window = document.createWindow();
window = jsdom.jsdom().parentWindow;
global.jQuery = global.$ = require('jquery');

//require('./messi.js');

navigator = window.navigator = {};
DEBUG = false;
navigator.userAgent = 'NodeJs JsDom';
navigator.appVersion = '';

sinon = require('sinon');
chai = require('chai');
//chai.use(require('chai-spies'));
//chai.use(require("sinon-chai"));
assert = chai.assert;
expect = chai.expect;
should = chai.should();

//angular = window.angular = {};
module = window.module = {};

//
var glob = require('glob').sync,
    _ = require('lodash');


// mocha
var Mocha = require('mocha');
var mocha = new Mocha();

mocha.reporter('spec').ui('bdd');


// gather test files
var filePatterns = _([ 'messi.js', 'test/all.js' ]);

var testFiles = filePatterns.map(function(pattern){
    return glob(pattern);
}).flatten();


testFiles.forEach(function(file){
    mocha.addFile(file);
});

var runner = mocha.run();
