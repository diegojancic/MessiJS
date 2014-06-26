---
layout: github
title: Demos
---
# MessiJS Demos

Here are a few demos to whet your appetite. All of MessiJS's options can
be found on the [Options](../options/) page.


A simple example:

```javascript
var dialog = new Messi('my message');
```

A simple example with no close button. Bad idea!

```javascript
var dialog = new Messi(
    'Why is this one bad?<br/><strong>Hint:</strong> Reloading the page may help.',
    {closeButton: false}
);
```

An autoclosing dialog:

```javascript
var dialog = new Messi(
    'This message will close automatically!',
    {autoclose: 1000}
);
```

Add a titlebar:

```javascript
var dialog = new Messi('my message', {title: 'My title'});
```

Make the dialog modal (adds a layer to force you to react to the dialog):

```javascript
var dialog = new Messi(
    "This is a message with Messi in modal view. Now you can't interact with other elements in the page until close this.",
    {title: 'Modal Window', modal: true}
);
```

Add customizable buttons to the bottom:

```javascript
var dialog = new Messi(
    'This is a message with Messi with custom buttons on the bottom.',
    {
        title: 'Buttons',
        buttons: [
            {id: 0, label: 'Yes', val: 'Y', class: 'btn-success'},
            {id: 1, label: 'No', val: 'N', class: 'btn-danger'},
            {id: 2, label: 'Cancel', val: 'C'}
        ]
    }
);
```

Customizable buttons with a callback:

```javascript
var dialog = new Messi(
    'This messi dialog has custom buttons and callback.',
    {
        title: 'Buttons',
        buttons: [
            {id: 0, label: 'Yes', val: 'Y'},
            {id: 1, label: 'No', val: 'N'}
        ],
        callback: function(val) { alert('Your selection: ' + val); }
    }
);
```

Apply styles to your titlebar:

* success (a lovely shade of green)
* info (blue)
* error (red)
* warning (orange)

Add animation with _anim_.

```javascript
var dialog = new Messi(
    'This is a error message.',
    {
        title: 'Animated error',
        titleClass: 'anim error',
        buttons: [ {id: 0, label: 'Close', val: 'X'} ]
    }
);
```

# Extensions
```javascript
Messi.alert('This is an alert with Messi.');
```

```javascript
Messi.ask(
    'This is a question with Messi. Do you like it?',
    function(value) { alert(value); }
);
```

```javascript
Messi.img(
    'https://avatars2.githubusercontent.com/u/70142?s=140'
);
```
