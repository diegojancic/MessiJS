---
layout: github
---
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
