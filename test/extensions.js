
describe('Create a Messi.alert()', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = Messi.alert('This is an alert with Messi.');
    });

    afterEach(function() {
        dialog.unload();
    });

    it.skip('should show a Messi alert', function() {
        expect($('.messi-content').text()).to.be.equal('This is an alert with Messi.');
    });

    it('should have an OK button', function() {
        expect($('.messi button').text()).to.equal('OK');
    });

    it('should not have a titlebar by default', function() {
        expect($('.messi-titlebox').get(0)).to.be.undefined;
    });
});

describe('Create a Messi.ask() to launch a fast yes/no message', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = Messi.ask(
            'This is a question with Messi. Do you like it?',
            function(value) { }
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a callback');

    it('should have a yes button', function() {
        expect($('button[value="Yes"]').get(0)).to.be.defined;
    });

    it('should have a no button', function() {
        expect($('button[value="No"]').get(0)).to.be.defined;
    });

    it.skip('should have content', function() {
        expect($('.messi-content').text()).to.equal('This is a question with Messi. Do you like it?');
    });

    it('but should not have a titlebar by default', function() {
        expect($('.messi-titlebox').get(0)).to.be.undefined;
    });
});

describe('Using Messi.img()', function() {
    it('will show an image', function() {
        Messi.img('https://avatars2.githubusercontent.com/u/70142?s=140');
        expect(jQuery('.messi').get(0)).to.be.defined;
        expect(jQuery('.messi img').get(0)).to.be.defined;
        $('.messi').unload();
    });

    it('will error loading a non-existant image', function() {
        Messi.img('http://www.example.com/image.gif');
        expect(jQuery('.messi').get(0)).to.be.defined;
        expect(jQuery('.messi img').get(0)).to.be.undefined;
    });
});
