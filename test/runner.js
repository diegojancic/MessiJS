beforeEach(function(done) {
    setTimeout(function() {
        done();
    }, 25);
});

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

// FIXME This appears to be picking up a previous test's window.
describe('Create a Messi window with a custom button', function() {
    var dialog = null;

    beforeEach(function(done) {
        dialog = new Messi(
            'This is a message with Messi with custom buttons.',
            {title: 'Buttons', buttons: [{id: 0, label: 'Close', val: 'X'}]}
        );
        done();
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should show my message', function() {
        expect($('.messi-content').text()).to.be.equal('This is a message with Messi with custom buttons.');
    });

    it('should not have an inline close button', function() {
        expect($('.messi-closebtn').get(0)).to.be.undefined;
    });

    it('should have a custom "Close" action button', function() {
        expect($('.messi-actions button').text()).to.equal('Close');
    });
});

describe('Message with custom buttons (yes/no/cancel)', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi with custom buttons.',
            {
                title: 'Buttons', buttons: [
                    {id: 0, label: 'Yes', val: 'Y'},
                    {id: 1, label: 'No', val: 'N'},
                    {id: 2, label: 'Cancel', val: 'C'}
                ]
            }
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a yes button', function() {
        expect($('button[value="Yes"]').get(0)).to.be.defined;
    });

    it('should have a no button', function() {
        expect($('button[value="No"]').get(0)).to.be.defined;
    });

    it('should have a cancel button', function() {
        expect($('button[value="Cancel"]').get(0)).to.be.defined;
    });
});

describe('Message with custom buttons (yes/no) and style classes', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi with custom buttons.',
            {
                title: 'Buttons',
                buttons: [
                    {id: 0, label: 'Yes', val: 'Y', class: 'btn-success'},
                    {id: 1, label: 'No', val: 'N', class: 'btn-danger'}
                ]
            }
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a yes button with class', function() {
        expect($('button.btn-success[value="Yes"]').get(0)).to.be.defined;
    });

    it('should have a no button with class', function() {
        expect($('button.btn-danger[value="No"]').get(0)).to.be.defined;
    });
});

describe('Window with success title', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi.',
            {
                title: 'Title',
                titleClass: 'success',
                buttons: [{id: 0, label: 'Close', val: 'X'}]
            }
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should have a titleClass of "success"', function() {
        expect($('.messi-titlebox.success').attr('class')).to.match(/success/);
    });
});

describe('Window with error title (animated)', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new Messi(
            'This is a message with Messi.',
            {
                title: 'Title',
                titleClass: 'anim error',
                buttons: [{id: 0, label: 'Close', val: 'X'}]
            }
        );
    });

    afterEach(function() {
        dialog.unload();
    });

    it('titleClass should be "error"', function() {
        expect($('.messi-titlebox.error').text()).to.be.equal('Title');
    });

    it('titleClass should be animated', function() {
        expect($('.messi-titlebox.anim').text()).to.be.equal('Title');
    });
});

describe('Create a Messi.alert()', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = Messi.alert('This is an alert with Messi.');
    });

    afterEach(function() {
        dialog.unload();
    });

    it('should show a Messi alert', function() {
        expect($('.messi-content').text()).to.be.equal('This is an alert with Messi.');
    });

    it('should show a Messi alert', function() {
        expect($('.messi button').text()).to.equal('OK');
    });

    it('should not have a titlebar', function() {
        expect($('.messi-titlebox').get(0)).to.be.undefined
    });
});

describe('Create a Messi.ask() to launch a fast yes/no message', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = Messi.ask(
            'This is a question with Messi. Do you like it?',
            function(val) { console.log('Your selection: ' + val); });
    });

    afterEach(function() {
        dialog.unload();
    });

    it('TBD: should show a Messi ask');
});

describe('Use Messi.load() to show an ajax response', function() {
    it('TBD: show an Ajax response');
});

describe('Use Messi.img() to show an image', function() {
    it('TBD: show an image');
});
