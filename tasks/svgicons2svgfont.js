/*
 * grunt-svgicons2svgfont
 * https://github.com/nfroidure/svgicons2svgfont
 *
 * Copyright (c) 2013 Nicolas Froidure
 * Licensed under the MIT license.
 */

"use strict";

var Path = require("path")
  , Fs = require("fs")
  , Package = require("../package.json")
  , svgicons2svgfont = require("svgicons2svgfont");

module.exports = function(grunt) {

  var options;

  grunt.registerMultiTask("svgicons2svgfont", Package.description, function() {
    this.requiresConfig([this.name, this.target, "src"].join("."));
    this.requiresConfig([this.name, this.target, "dest"].join("."));

    options = this.options({
      font: "iconfont",
      appendCodepoints: false
    });

    var done = this.async();
    this.files.forEach(function (files) {
      var fontDestination = Path.join(files.dest, options.font);
      svgicons2svgfont(files.src, fontDestination + '.svg', {
        fontName: options.font,
        log: grunt.log.ok,
        error: grunt.log.fail,
        callback: done
      });
    });
  });

};
