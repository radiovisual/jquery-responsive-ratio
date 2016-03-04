# jquery-responsive-ratio [![Build Status](https://travis-ci.org/radiovisual/jquery-responsive-ratio.svg?branch=master)](https://travis-ci.org/radiovisual/jquery-responsive-ratio)

> Force DOM elements to be responsive at a specific aspect ratio.

**Note:** This plugin is brand new, and [does not have any unit tests](https://github.com/radiovisual/jquery-responsive-ratio/issues/1). I am currently using this plugin and it works to suit my needs in the browser, but it needs unit tests. Until I find the time, pull requests welcomed.

## Install

with [npm](https://www.npmjs.com/package/jquery-responsive-ratio):

```
$ npm install --save jquery-responsive-ratio
```

or manually: 

```html
<script src='js/vendor/jquery.responsive-ratio.min.js'></script>
```


## Usage

```js
jQuery('iframe').makeResponsive();
```


## API

### jQuery($object).makeResponsive([options]);

#### $object

*Required*  
The jquery object or collection you want to make responsive.  

#### options

##### ratio

Type: `number`  
Default: `0.563`

The aspect ratio you want to force on the jQuery element. 


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
