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
    'This is a message with Messi in modal view. Now you can\'t interact with other elements in the page until close this.',
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

# MessiJS Options
| Option       | Default                   | Description                                                            |
| ------------ | ------------------------- | ---------------------------------------------------------------------- |
| autoclose    | null                      | autoclose after 'x' milliseconds                                       |
| buttons      | [ ]                       | array of buttons e.g. [{id: 'yes', label: 'Yes', val: 'Yes'}]          |
| callback     | null                      | callback function after close message                                  |
| center       | true                      | center message on screen                                               |
| closeButton  | true                      | show close button in header title                                      |
| height       | 'auto'                    | content height                                                         |
| title        | null                      | message title                                                          |
| titleClass   | null                      | title style: info, warning, success, error                             |
| margin       | 0                         | enforce a viewport the dialog cannot move outside, set zero to disable |
| modal        | false                     | shows the message in modal style (loads the background)                |
| modalOpacity | 0.2                       | modal background opacity                                               |
| padding      | '10px'                    | content padding                                                        |
| position     | {top: '0px', left: '0px'} | if center: false, sets X and Y position                                |
| show         | true                      | show message after load                                                |
| unload       | true                      | unload message after hide                                              |
| viewport     | {top: '0px', left: '0px'} | deprecated, see position                                               |
| width        | '500px'                   | message width                                                          |
| zIndex       | 99999                     | message z-index                                                        |
