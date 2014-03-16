
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

describe('Create an absolutely positioned Messi window', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi in absolute position.',
            {center: false, viewport: {top: '76px', left: '10px'}}
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should be positioned absolutely', function() {
        var position = $('.messi').position();
        expect(position.top).to.equal(76);
        expect(position.left).to.equal(10);
    });
});

describe('Create a Messi window with a custom button', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi with custom buttons.',
            {title: 'Buttons', buttons: [{id: 0, label: 'Close', val: 'X'}]}
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should not have an inline close button', function() {
        var dialog = new Messi('my message');
        expect($('.messi-closebtn').get(0)).to.not.be.defined
    });

    it('should have a custom "Close" action button', function() {
        expect($('.messi-actions button').text()).to.equal('Close');
    });
});

describe('Message with custom buttons (yes/no/cancel) and style classes', function() {
    it('should have a yes button');
    it('should have a no button');
    it('should have a cancel button');
    it('should have style classes');
});

describe('Window with success title', function() {
    it('titleClass should be "success"');
});

describe('Window with info title', function() {
    it('titleClass should be "info"');
});

describe('Window with error title (animated)', function() {
    it('titleClass should be "error"');
    it('title should be animated');
});

describe('Window with warning title (animated)', function() {
    it('titleClass should be "warning"');
    it('title should be animated');
});

describe('Create a Messi.alert()', function() {
    it('should show a Messi alert');
});

describe('Create a Messi.ask() to launch a fast yes/no message', function() {
    it('should show a Messi ask');
});

describe('Use Messi.load() to show an ajax response', function() {
    it('TBD');
});

describe('Use Messi.img() to show an image', function() {
    it('should show an image');
});
