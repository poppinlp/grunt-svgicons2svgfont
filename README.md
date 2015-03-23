# grunt-svgicons2svgfont [![Build Status](https://secure.travis-ci.org/nfroidure/grunt-svgicons2svgfont.png)](http://travis-ci.org/nfroidure/grunt-svgicons2svgfont)

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

#### options.font
Type: `String`
Default value: `'iconfont'`

A string value that is used to name your font-family.

#### options.appendCodepoints
Type: `Boolean`
Default value: `false`

Allow to append codepoints to icon files in order to always keep the same codepoints.

### Example

```js
grunt.initConfig({
  svgicons2svgfont: {
    options: {
      font: "my-font-name"
    },
    your_target: {
        src: 'glyphs/*.svg',
        dest: 'font/'
    }
  },
})
```

### Related Grunt plugins
You may use this plugin in addition of the following plugins :
* [grunt-svg2ttf](https://npmjs.org/package/grunt-svg2ttf)
* [grunt-ttf2eot](https://npmjs.org/package/grunt-ttf2eot)
* [grunt-ttf2woff](https://npmjs.org/package/grunt-ttf2woff)

### Contributing / Issues

Please submit SVG related issue to the
 [svgicons2svgfont project](https://github.com/nfroidure/svgicons2svgfont)
 on wich grunt-svgicons2svgfont depends.

This repository issues is only for grunt and grunt tasks related issues.

You may want to contribute to this project, pull requests are welcome if you
 accept to publish under the MIT licence.
