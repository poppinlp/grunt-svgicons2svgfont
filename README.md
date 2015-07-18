# grunt-svgicons2svgfont
[![Build Status](https://travis-ci.org/poppinlp/grunt-svgicons2svgfont.png?branch=master)](https://travis-ci.org/poppinlp/grunt-svgicons2svgfont)
[![Dependency Status](https://david-dm.org/poppinlp/grunt-svgicons2svgfont.svg)](https://david-dm.org/poppinlp/grunt-svgicons2svgfont)
[![devDependency Status](https://david-dm.org/poppinlp/grunt-svgicons2svgfont/dev-status.svg)](https://david-dm.org/poppinlp/grunt-svgicons2svgfont#info=devDependencies)

Create a SVG font from multiple SVG glyph files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
 the [Getting Started](http://gruntjs.com/getting-started) guide, as it
 explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as
 well as install and use Grunt plugins. Once you're familiar with that process,
 you may install this plugin with this command:

```shell
npm install grunt-svgicons2svgfont --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
 with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svgicons2svgfont');
```

## The "svgicons2svgfont" task

### Overview
In your project's Gruntfile, add a section named `svgicons2svgfont` to the data
 object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgicons2svgfont: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### src
Type: `string`

SVG glyphs. Wildcards are supported.

#### dest
Type: `string`

Directory of the resulting font.

#### options.fontName
Type: `String`
Default value: `'iconfont'`

A string value that is used to name your font-family.

#### options.appendCodepoints
Type: `Boolean`
Default value: `false`

Allow to append codepoints to icon files in order to always keep the same codepoints.

#### options.fixedWidth
Type: `Boolean`
Default value: `false`

Creates a monospace font of the width of the largest input icon.

#### options.centerHorizontally
Type: `Boolean`
Default value: `false`

Calculate the bounds of a glyph and center it horizontally.

**Warning:** The bounds calculation is currently a naive implementation that may not work for some icons. We need to create a svg-pathdata-draw module on top of svg-pathdata to get the real bounds of the icon. It's in on the bottom of my to do, but feel free to work on it. Discuss it in the

[related issue](https://github.com/nfroidure/svgicons2svgfont/issues/18).

#### options.normalize
Type: `Boolean`
Default value: `false`

Normalize icons by scaling them to the height of the highest icon.

#### options.fontHeight
Type: `Number`
Default value: `MAX(icons.height)`
The outputted font height  (defaults to the height of the highest input icon).

#### options.round
Type: `Number`
Default value: `10e12`
Setup SVG path rounding.

#### options.descent
Type: `Number`
Default value: `0`

The font descent. It is usefull to fix the font baseline yourself.

#### options.metadata
Type: `String`
Default value: `undefined`

The font [metadata](http://www.w3.org/TR/SVG/metadata.html). You can set any character data in but it is the be suited place for a copyright mention.

#### options.log
Type: `Function`
Default value: `false`

Allows you to provide your own logging function. Set to `function(){}` to impeach logging.

#### options.error
Type: `Function`
Default value: `false`

Allows you to provide your own error function. Set to `function(){}` to impeach error.

### Example

```js
grunt.initConfig({
  svgicons2svgfont: {
    options: {
        fontName: "my-font-name",
        metadata: {
            unicode: ['\uE001\uE002'],
            name: 'icon1'
        }
    },
    your_target: {
        src: 'glyphs/*.svg',
        dest: 'font/'
    }
  },
})
```

### Related Grunt plugins

You may use this plugin in addition of the following plugins:

* [grunt-svg2ttf](https://www.npmjs.com/package/grunt-svg2ttf)
* [grunt-ttf2eot](https://www.npmjs.com/package/grunt-ttf2eot)
* [grunt-ttf2woff](https://www.npmjs.com/package/grunt-ttf2woff)
* [grunt-iconfont](https://www.npmjs.com/package/grunt-iconfont)

### Contributing / Issues

Please submit SVG related issue to the
 [svgicons2svgfont project](https://github.com/nfroidure/svgicons2svgfont)
 on wich grunt-svgicons2svgfont depends.

This repository issues is only for grunt and grunt tasks related issues.

You may want to contribute to this project, pull requests are welcome if you
 accept to publish under the MIT licence.
