# Lecture 7

### 29.11.17

## Agenda

### JS in the Browser
* `window` Object
  * Represents an open window in a browser
  * Equivalent of `global` in Node
  * Monkey Patching 🙉
* `document` Object
  * Represents the DOM tree
  * `document.all`, `document.body`, etc.
  * Used for selecting and updating DOM Objects
  * Holds current URL and data about it: `window.location`
  * DOM Objects
    * Opening and closing tags: `<tag>...</tag>`
    * Inline tags (`img`, `br`, ...)
    * `id`, `class`
    * `img` tags: `alt`, `src`
  * Manipulating tag attributes
    * `getAttribute()`
    * `setAttribute()`
  * Manipulating elements
    * `createElement()`
    * `innerHtml`
    * `appendChild()` & `prepend()`
* `history` Object
  * Holds the navigation history and the navigation methods
  * `back()`, `forward()`, `go()`
  * `state` manipulation
* `screen` Object
  * Info about out screen: width, height, pixel density etc.
* `navigator` Object
    * Get information aobut the actual browser(`appName`, `appVersion`, etc.)
    * Get infromation about the device itsself
      * Bluetooth
      * Battery
      * Geolocation
    * Web Workerks, Notifications
    * Permissions
* `localStorage` Object
  * Persistant local key-value pair storage
  * Accessing it throught the dev tools
  * Manipulating data
    * `setItem()`
    * `getItem()`
    * `removeItem()`
  * Handling JS Objects in the local storage
    * `JSON.parse()`
    * `JSON.stringify()` and its parametres
* `sessionStorage` Object
  * Same as `localStorage`, but data gets cleared when the page session ends