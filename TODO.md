TO DO:
======

Goals
-----

Take Messi and move it to the next level.  Also full support for IE9+.

If you are interested in helping, send me Pull Requests and I'll
review them.  Where appropriate, I'll try to add the Pull Requests
that have been already issued for the original Messi repo.

### Preparing for 2.0 Final
* [ ] 95% Code Coverage _[Note!](https://github.com/MessiJS/MessiJS#coveralls)_ or better
* [ ] Write the documentation
* [ ] Write CONTRIBUTING.md
* :white_check_mark: Add a LICENSE file
* :white_check_mark: Update package.json
* :white_check_mark: Add css minification.

### Preparing for 2.0 Beta
* :white_check_mark: Re-evaluate Global vs jQuery scope. Make consistent, easy to use and backward compatible
    :white_check_mark: Option 1: Since jQuery.Messi(...) doesn't make sense, remove it.
    - Option 2: Make Messi a true jQuery plugin with new Messi === $('body').Messi(...). [This may be done for MessiJS 2.1.]
    - Option 3: Leave the status quo

* :white_check_mark: Greater than 90% Code Coverage_[Note!](https://github.com/MessiJS/MessiJS#coveralls)_
* [ ] Preliminary documentation
* :white_check_mark: Distributing and Bower
    - Folder structure doesn't matter.
    - Attaching zip file to Github release (will Bower use this?)
    - [ ] Commit dist directory only on tagged releases!
        + Create a release branch, then delete it afterward?
* :white_check_mark: Banners for messi.js and messi.min.js (also css?)
* :white_check_mark: Examine Open Issues: Currently there are 38 Open Issues
* :white_check_mark: Complete the Issue tests
* :white_check_mark: Update package.json
* :white_check_mark: Add Code Style checks for JSHint.

### Preliminary
* :white_check_mark: In the current build, the messi.min.js works but the messi.js is broken.
* :white_check_mark: A guplfile.js needs to be created to manage testing and minifying.
* :white_check_mark: Tests—preferably in Mocha—need to be written.
* :white_check_mark: Messi does not play nice with other Javascript.  It needs to be wrapped in an IIFE so it's no longer in the global scope. See PR27 & PR28. 

### Pull Requests – Examine and apply all appropriate 
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/26 – Added Box Name _NOTE: There are better ways to do this. E.g. hide()_
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/27 – Bad Integration with jQuery patch-1
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/28 – Bad Integration with jQuery patch-2
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/29 – Fixed: width buttons on Firefox
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/30 – Fix to enable the callbacks
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/31 – Remove extra comma
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/32 – updated messi.js to correct when messi appears off page
* [x] https://github.com/marcosesperon/Messi/pull/33 – add click to close feature _This will likely be added. Not before 2.1, however._
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/35 - Update messi.css (for Firefox 23.0.1) _IGNORED: This fix was causing the buttons to appear incorrectly in Firefox 27.0.1_
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/36 - fix unload and modal
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/38 - Controlling the resizing and scrolling the screen to adjust the message in the user's field of view.
