var expect = chai.expect;

function closeDialog(dialog, done) {
    dialog.unload();
    setTimeout(function() {
        done();
    }, 500);
}

function waitForDialogToClose(done) {
    $messi = $('.messi');
    if ($messi.get(0) !== undefined) {
        setTimeout(waitForDialogToClose, 50);
        done();
    }
}

beforeEach(function(done) {
    setTimeout(function() {
        $('container').width(800).height(600);
        //$(document).width(800).height(600);
        done();
    }, 25);
});

afterEach(function() {
    //setTimeout(waitForDialogToClose, 50);
});

describe('Creating a simple Messi window', function() {

    it('should be ready', function() {
        expect($.Messi).to.be.a('function');
    });

    // FIXME Script error. (:0)
    it.skip('should open and close', function(done) {
        //expect($('.messi:visible').get(0)).to.be.undefined;
        var dialog = new $.Messi('my message');
        expect($('.messi:visible').get(0)).to.be.defined;
        dialog.unload();
        setTimeout(function() {
            expect($('.messi:visible').get(0)).to.be.undefined;
            done();
        }, 500);
    });

    it('should show "my message"', function(done) {
        var dialog = new $.Messi('my message');
        expect($('.messi-content').text()).to.be.equal('my message');
        closeDialog(dialog, done);
    });

    it('should toggle the dialog', function(done) {
        var dialog = new $.Messi('my message');
        expect($('.messi:visible', dialog).get(0)).to.be.defined;
        dialog.toggle();
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            dialog.toggle();
            setTimeout(function() {
                expect($('.messi:visible', dialog).get(0)).to.be.defined;
                closeDialog(dialog, done);
            }, 500);
        }, 500);
    });

    it('should remain open on show()', function(done) {
        var dialog = new $.Messi('my message');
        expect($('.messi:visible', dialog).get(0)).to.be.defined;
        expect(dialog.visible).to.be.ok;
        dialog.show();
        expect($('.messi:visible', dialog).get(0)).to.be.defined;
        expect(dialog.visible).to.be.ok;
        closeDialog(dialog, done);
    });

    it('should remain hidden on hide()', function(done) {
        var dialog = new $.Messi('my message');
        dialog.hide();
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            dialog.hide();
            expect($('.messi:visible', dialog).get(0)).to.be.defined;
            closeDialog(dialog, done);
        }, 100);
    });

    it('should have a close button', function(done) {
        var dialog = new $.Messi('my message');
        expect($('.messi-closebtn').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });

    it('should close when we click the button', function(done) {
        var dialog = new $.Messi('my message');
        $('.messi-closebtn').click();
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            done();
        }, 500);
    });

    it('should close automatically when autoclose is enabled', function(done) {
        var dialog = new $.Messi('my message', {autoclose: 300});
        expect($('.messi:visible', dialog).get(0)).to.be.defined;
        setTimeout(function() {
            expect($('.messi:visible', dialog).get(0)).to.be.undefined;
            done();
        }, 700);
    });

    it('should show a closebutton when option is enabled', function(done) {
        var dialog = new $.Messi('my message', {closeButton: true});
        expect($('.messi-closebtn').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });

    it('should not show a closebutton when option is disabled', function(done) {
        var dialog = new $.Messi('my message', {closeButton: false});
        expect($('.messi', dialog).get(0)).to.be.defined;
        expect($('.messi-closebtn', dialog).get(0)).to.be.undefined;
        closeDialog(dialog, done);
    });

});

describe('Create a titled Messi window', function() {
    beforeEach(function() {
        dialog = new $.Messi('my message', {title: 'My title'});
    });

    it('should have a title', function(done) {
        expect($('.messi-title:visible').text()).to.equal('My title');
        closeDialog(dialog, done);
    });

    it('should have a visible close button', function(done) {
        expect($('.messi-closebtn').get(0)).to.defined;
        expect($('.messi-closebtn').css('opacity')).to.equal('1');
        closeDialog(dialog, done);
    });

    it('should close when we click the button', function(done) {
        var dialog = new $.Messi('my message');
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
        dialog = new $.Messi(
            'This is a message with Messi in modal view. Now you can\'t interact with other elements in the page until close this.',
            {title: 'Modal Window', modal: true}
        );
    });

    it('should have a title', function(done) {
        expect($('.messi-title:visible').text()).to.equal('Modal Window');
        closeDialog(dialog, done);
    });

    it('should open a modal background', function(done) {
        expect($('.messi-modal').get(0)).to.defined;
        closeDialog(dialog, done);
    });
});

describe('Create an absolutely positioned Messi window', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new $.Messi(
            'This is a message with Messi in absolute position.',
            {
                center: false,
                width: '200px',
                viewport: {top: '8px', left: '8px'}
            }
        );
    });

    // TODO this was failing on PhantomJS - viewport
    it('should be positioned absolutely', function(done) {
        var position = $('.messi').position();
        expect(position.top).to.equal(8);
        expect(position.left).to.equal(8);
        closeDialog(dialog, done);
    });
});

describe('Create a Messi window with a custom buttons', function() {
    var dialog = null;

    beforeEach(function(done) {
        dialog = new $.Messi(
            'This is a message with Messi with custom buttons.',
            {title: 'Buttons', buttons: [{id: 0, label: 'Close', val: 'X'}]}
        );
        done();
    });

    it('should show my message', function(done) {
        expect($('.messi-content').text()).to.be.equal('This is a message with Messi with custom buttons.');
        closeDialog(dialog, done);
    });

    it('should not have an inline close button', function(done) {
        expect($('.messi-closebtn').get(0)).to.be.undefined;
        closeDialog(dialog, done);
    });

    it('should have a custom "Close" action button', function(done) {
        expect($('.messi-actions button').text()).to.equal('Close');
        closeDialog(dialog, done);
    });
});

describe('Message with custom buttons (yes/no/cancel)', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new $.Messi(
            'This is a message with Messi with custom buttons.',
            {
                title: 'Buttons',
                buttons: [
                    {id: 0, label: 'Yes', val: 'Y'},
                    {id: 1, label: 'No', val: 'N'},
                    {id: 2, label: 'Cancel', val: 'C'}
                ]
            }
        );
    });

    it('should have a yes button', function(done) {
        expect($('button[value="Yes"]').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });

    it('should have a no button', function(done) {
        expect($('button[value="No"]').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });

    it('should have a cancel button', function(done) {
        expect($('button[value="Cancel"]').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });
});

describe('Message with custom buttons (yes/no) and style classes', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new $.Messi(
            'This is a message with Messi with custom buttons.',
            {
                title: 'Buttons',
                buttons: [
                    {id: 0, label: 'Yes', val: 'Y', 'class': 'btn-success'},
                    {id: 1, label: 'No', val: 'N', 'class': 'btn-danger'}
                ]
            }
        );
    });

    it('should have a yes button with class', function(done) {
        expect($('button.btn-success[value="Yes"]').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });

    it('should have a no button with class', function(done) {
        expect($('button.btn-danger[value="No"]').get(0)).to.be.defined;
        closeDialog(dialog, done);
    });
});

describe('Window with success title', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new $.Messi(
            'This is a message with Messi.',
            {
                title: 'Title',
                titleClass: 'success',
                buttons: [{id: 0, label: 'Close', val: 'X'}]
            }
        );
    });

    it('should have a titleClass of "success"', function(done) {
        expect($('.messi-titlebox.success').attr('class')).to.match(/success/);
        closeDialog(dialog, done);
    });
});

describe('Window with error title (animated)', function() {
    var dialog = null;

    beforeEach(function() {
        dialog = new $.Messi(
            'This is a message with Messi.',
            {
                title: 'Title',
                titleClass: 'anim error',
                buttons: [{id: 0, label: 'Close', val: 'X'}]
            }
        );
    });

    it('titleClass should be "error"', function(done) {
        expect($('.messi-titlebox.error').text()).to.be.equal('Title');
        closeDialog(dialog, done);
    });

    it('titleClass should be animated', function(done) {
        expect($('.messi-titlebox.anim').text()).to.be.equal('Title');
        closeDialog(dialog, done);
    });
});
