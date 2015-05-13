  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

Detect Mobile Browser
=====================

Small plugin to detect mobile browser 

**Usage Frotnend:-**

```javascript
alert(SmartPhone.isAndriod());
```

OR

```javascript
alert(SmartPhone.isAny());
```

**Usage Backend:-**

User as a ExpressJS middleware

```javascript
var mobileBrowser = require('./detect-browser');

...
...

app.use(mobileBrowser());

app.get('/', function (req, res){
    ...
    ...

    console.log(req.SmartPhone.isAny());

    ...
    ...

});

```



## Bower

    $ bower install browser-detector --save

## NPM

    $ npm install detect-mobile-browser --save

[npm-image]: https://img.shields.io/npm/v/detect-mobile-browser.svg
[npm-url]: https://www.npmjs.com/package/detect-mobile-browser
[downloads-image]: https://img.shields.io/npm/dm/detect-mobile-browser.svg
[downloads-url]: https://www.npmjs.com/package/detect-mobile-browser