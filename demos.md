---
layout: github
title: Demos
---
# MessiJS Demos

There will soon be more MessiJS examples here.  In the meantime, here are a few to whet your appetite.


```javascript
var dialog = new Messi('my message');
```

```javascript
var dialog = new Messi('my message', {closeButton: false});
```

```javascript
var dialog = new Messi('my message', {autoclose: 100});
```

```javascript
var dialog = new Messi('my message', {title: 'My title'});
```

```javascript
var dialog = new Messi(
    "This is a message with Messi in modal view. Now you can't interact with other elements in the page until close this.",
    {title: 'Modal Window', modal: true}
);
```

```javascript
var dialog = new Messi(
    'This is a message with Messi with custom buttons.',
    {
        title: 'Buttons',
        buttons: [{id: 0, label: 'Close', val: 'X', 'class': 'cbClose'}],
        callback: function(value) {
            jQuery(document).triggerHandler('messi.cb');
            return true;
        }
    }
);
```

