
describe('Creating a simple Messi window', function() {

    it('should be ready', function() {
        expect(window.Messi).to.be.a('function');
    });

    it('should open and close', function() {
        expect($('.messi:visible').get(0)).to.be.undefined;
        var dialog = new Messi('my message');
        expect($('.messi:visible').get(0)).to.be.ok;
        dialog.unload();
        expect($('.messi:visible').get(0)).to.be.undefined;
    });

    it('should show my message', function() {
        var dialog = new Messi('my message');
        expect($('.messi-content').text()).to.be.equal('my message');
        dialog.unload();
    });

    it('should have a hidden close button', function() {
        var dialog = new Messi('my message');
        expect($('.messi-closebtn').get(0)).to.be.defined
        expect($('.messi-closebtn').css('opacity')).to.equal('0')
        dialog.unload();
    });

    it('should close when we click the button', function(done) {
        var dialog = new Messi('my message');
        $('.messi-closebtn').click();
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            done();
        }, 600);
    });

});

describe('Create a titled Messi window', function() {
    beforeEach(function() {
        dialog = new Messi('my message', {title: 'My title'});
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a title', function() {
        expect($('.messi-title:visible').text()).to.equal('My title');
    });

    it('should have a visible close button', function() {
        expect($('.messi-closebtn').get(0)).to.defined
        expect($('.messi-closebtn').css('opacity')).to.equal('1')
    });

    it('should close when we click the button', function(done) {
        var dialog = new Messi('my message');
        $('.messi-closebtn').click();
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            done();
        }, 600);
    });
});

describe('Create a modal Messi window', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi in modal view. Now you can\'t interact with other elements in the page until close this.',
            {title: 'Modal Window', modal: true}
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a title', function() {
        expect($('.messi-title:visible').text()).to.equal('Modal Window');
    });

    it('should open a modal background', function() {
        expect($('.messi-modal').get(0)).to.defined
    });
});

describe('Create an abosolutely positioned Messi window', function() {
    it('should be truthy', function() {
        expect(true).to.be.ok;
    });
});
