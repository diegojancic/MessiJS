$('code.language-javascript').each(function(index, el) {
    var $this = $(this);
    var js = $this.text()

    //var $par = $this.before('<p>RUN</p>');
    //$par.css('float', 'right');

    $('<a href="">RUN</a>')
        .insertBefore(this)
        .click(function() {
            eval(js); // bad practice but I control `js`
            return false;
        })
        .css('float', 'right');
});
