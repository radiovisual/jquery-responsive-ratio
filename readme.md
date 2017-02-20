# jquery-responsive-ratio [![Build Status](https://travis-ci.org/radiovisual/jquery-responsive-ratio.svg?branch=master)](https://travis-ci.org/radiovisual/jquery-responsive-ratio)

> Force DOM elements to be responsive at a specific aspect ratio. Useful for
keeping video elements displaying at their correct aspect ratio in responsive
situations.

**Note:** This plugin is brand new, and [does not have any unit tests](https://github.com/radiovisual/jquery-responsive-ratio/issues/1).
Because it is in the `0.x` release, you can expect lots of little changes to occur.
Pull requests welcome.


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
The jQuery object or collection you want to make responsive.  

#### options

##### ratio

Type: `string`  
Default: `'16:9'`

The aspect ratio you want to force on the jQuery element.

##### class

Type: `string`  
Default: `responsive-ratio`

The class name to assign to elements targeted by this plugin.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
