---
layout: github
title: Demos
---
# MessiJS Demos

Here are a few demos to whet your appetite. All of MessiJS's options can
be found on the [Options](../options/) page.


```javascript
var dialog = new Messi('my message');
```

```javascript
var dialog = new Messi(
    'Why is this one bad?<br/><strong>Hint:</strong> Reloading the page may help.',
    {closeButton: false}
);
```

```javascript
var dialog = new Messi('my message', {autoclose: 1000});
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
    'This is a message with Messi with a close button.',
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

```javascript
dialog = new Messi(
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

```javascript
Messi.load('http://google.com/', {});
```

```javascript
Messi.load('http://messijs.github.io/', {});
```
