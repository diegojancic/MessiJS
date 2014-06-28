---
layout: github
title: API Documentation
---
# API Documentation


```javascript
window.dialog = new Messi(
    'A Messi message.',
    {
        center: false,
        width: '300px',
        position: { top: '20px', left: '20px' }
    }
);
```

Change the dialog's content.

```javascript
dialog.setContent('Some new content.');
```

Force the dialog to move to the center.

```javascript
dialog.center();
```

Hide, but don't remove, the dialog.

```javascript
dialog.hide();
```

Show the dialog.

```javascript
dialog.show();
```

Toggles the hide/show state of the dialog.

```javascript
dialog.toggle();
```

Removes the dialog from the DOM.

```javascript
dialog.unload();
```

```javascript
windows.$dialog = dialog.jqueryize();
$dialog.css({ top: 20px; left: 20px; })
```
