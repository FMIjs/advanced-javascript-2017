# Lecture 7

### 29.11.17

## Agenda

1. [JS in the Browser](#1-js-in-the-browser)
1. [AJAX, XHR, `fetch`](#2-ajax-xhr-fetch)
1. [Web Workers](#3-web-workers)
1. [Events in the browser](#4-events-in-the-browser)

## 1. JS in the Browser

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
  * Accessing tags
    * `getElementById()`
    * `getElementByClassName()`
    * ...
    * `querySelector()`
    * `querySelectorAll()`
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

## 2. AJAX, XHR, `fetch`

* *"Asynchronous JavaScript And XML"*
* Ye old ways:
  * [jQuery](http://api.jquery.com/jquery.ajax/)
  * [XHR](https://www.w3schools.com/xml/xml_http.asp)
    * *"XMLHttpRequest"*
    * `open()`
    * `send()`
    * `onreadystatechange()`
    * [XHR States](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  * The improved way of communicating with the server
  * Promise based
  ```javascript
  var myImage = document.querySelector('img');

  fetch('flowers.jpg').then(function(response) {
    return response.blob();
  })
  .then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
  ```
  * Even better we can use [this](https://github.com/axios/axios)
  * CORS
    * *"Cross-Origin Resource Sharing"*
    * What are [cookies](https://en.wikipedia.org/wiki/HTTP_cookie)? 🍪
    * Handles gainin access to resources from a server on a different origin
    * A means to prevent intrusions and data hijacking

## 3. Web Workers

* Means to run scripts in background threads
* Used for
  * Animaions
  * Heavy Calculations
  * etc.
* Creating a web worker
  ```javascript
  var myWorker = new Worker('worker.js'); // worker.js holds the actual worker
  ```
* Communicating with the web worker
  * Happens via the message bus
  * `postMessage()`
  * `onmessage()`
* Web workers can't access some thing the main thread can for instance the DOM Tree

## 4. Events in the browser

* Event types
  * Resource Events
    * `load`
    * `unload`
    * ...
  * Network Events
    * `online` - We've gained access to the network
    * `offline` - ...
  * Mouse Events
    * `click`
    * `mouseover`
    * ...
  * [and more](https://developer.mozilla.org/en-US/docs/Web/Events)
* Event Listeners
  * `addEventListener()`
  * `removeEventListener()`
* [Event bubbling and capturing](https://javascript.info/bubbling-and-capturing)