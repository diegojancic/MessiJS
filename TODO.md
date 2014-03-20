TO DO:
======

Goals
-----

Take Messi and move it to the next level.  The original author is unresponsive.

If you are interested in helping, send me Pull Requests and I'll
review them.  Where appropriate, I'll try to add the Pull Requests
that have been already issued for the official Messi repo.

* [x] In the current build, the messi.min.js works but the messi.js is broken.
* [x] A guplfile.js needs to be created to manage testing and minifying.
* [ ] Tests—preferably in Mocha—need to be written.
* [x] Messi does not play nice with other Javascript.  It needs to be wrapped in an IIFE so it's no longer in the
  global scope. See PR27 & PR28. 
  [x] Add css minification.


### Pull Requests – Examine and apply all appropriate 
* [x] https://github.com/marcosesperon/Messi/pull/26 – Added Box Name _NOTE: There are better ways to do this. E.g. hide()_
* [x] https://github.com/marcosesperon/Messi/pull/27 – Bad Integration with jQuery patch-1
* [x] https://github.com/marcosesperon/Messi/pull/28 – Bad Integration with jQuery patch-2
* [x] https://github.com/marcosesperon/Messi/pull/29 – Fixed: width buttons on Firefox
* [x] https://github.com/marcosesperon/Messi/pull/30 – Fix to enable the callbacks
* [x] https://github.com/marcosesperon/Messi/pull/31 – Remove extra comma
* [x] https://github.com/marcosesperon/Messi/pull/32 – updated messi.js to correct when messi appears off page
* [ ] https://github.com/marcosesperon/Messi/pull/33 – add click to close feature _I haven't decided if this is a good idea or not._

* [x] https://github.com/marcosesperon/Messi/pull/35 - Update messi.css (for Firefox 23.0.1) _IGNORED: This fix was causing the buttons to appear incorrectly in Firefox 27.0.1_
* [x] https://github.com/marcosesperon/Messi/pull/36 - fix unload and modal
* [x] https://github.com/marcosesperon/Messi/pull/38 - Controlling the resizing and scrolling the screen to adjust the message in the user's field of view.


### Open Issues – Read and move any appropriate issues to the new repo
* [ ] Examine Open Issues: Currently there are 38 Open Issues
