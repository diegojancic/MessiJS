TO DO:
======

Goals
-----

Take Messi and move it to the next level.  Also full support for IE9+.

If you are interested in helping, send me Pull Requests and I'll
review them.  Where appropriate, I'll try to add the Pull Requests
that have been already issued for the original Messi repo.

* :white_check_mark: In the current build, the messi.min.js works but the messi.js is broken.
* :white_check_mark: A guplfile.js needs to be created to manage testing and minifying.
* :white_check_mark: Tests—preferably in Mocha—need to be written.
* :white_check_mark: Messi does not play nice with other Javascript.  It needs to be wrapped in an IIFE so it's no longer in the global scope. See PR27 & PR28. 
* :white_check_mark: Add css minification.

### Preparing for 2.0 Beta
* [ ] 90% Code Coverage
* [ ] Examine Open Issues: Currently there are 38 Open Issues
    - [ ] #11 Autoclose problem in IE
    - [ ] #16 esc press close
    - [ ] #19 Modal view anomaly in IE
    - [ ] #20 btnClass not showing
    - [ ] [#21 Buttons in IE](https://github.com/marcosesperon/Messi/issues/21)
    - [ ] [#22 Bug 'load' API](https://github.com/marcosesperon/Messi/issues/22)
    - [ ] [#23 messi.load preloader](https://github.com/marcosesperon/Messi/issues/23)
    - [ ] [#24 Close with esc key & modal click](https://github.com/marcosesperon/Messi/issues/24)
    - [ ] Etc.
* [ ] Complete the Issue tests
* :white_check_mark: Update package.json
* [ ] Add Code Style checks for JSHint.

### Preparing for 2.0 Final
* [ ] Write the documentation
* [ ] Add a LICENSE file
* [ ] Update package.json
* [ ] Write CONTRIBUTING.md
* [ ] 95% Code Coverage or better

### Pull Requests – Examine and apply all appropriate 
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/26 – Added Box Name _NOTE: There are better ways to do this. E.g. hide()_
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/27 – Bad Integration with jQuery patch-1
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/28 – Bad Integration with jQuery patch-2
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/29 – Fixed: width buttons on Firefox
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/30 – Fix to enable the callbacks
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/31 – Remove extra comma
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/32 – updated messi.js to correct when messi appears off page
* [ ] https://github.com/marcosesperon/Messi/pull/33 – add click to close feature _I haven't decided if this is a good idea or not._
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/35 - Update messi.css (for Firefox 23.0.1) _IGNORED: This fix was causing the buttons to appear incorrectly in Firefox 27.0.1_
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/36 - fix unload and modal
* :white_check_mark: https://github.com/marcosesperon/Messi/pull/38 - Controlling the resizing and scrolling the screen to adjust the message in the user's field of view.

### Notes
#### #19 Modal view anomaly in IE
In IE (i'm testing on IE 9 - hate IE!) I get a strange behaviour with my modal view Messi.

I have a fixed header at the top of my website (100% width about 90px height), position fixed, z-index 1000. When the Messi dialogue should appear what I get is a flickering where my header panel, the overlay and the Messi dialogue box all flicker on and off together as in they appear and disappear rapidly. When the mouse is moved up over my header panel then everything settles and looks as it should do.

I wondered if it was competition for the z-index layer but your default is 99999 so can't be that. Any ideas?

Edit: I removed the modal:true setting to test it and no flickering. So definitely the modal causing this. Hope this helps.

#### #20 btnClass not showing
```
{id: 1, label: 'Confirm', val: 'N', btnClass: 'bs2'}
 -vs-
{id: 0, label: 'Cancel', val: 'Y', _class: 'bs1'},
```
