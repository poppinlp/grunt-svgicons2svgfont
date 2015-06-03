/*
 * grunt-svgicons2svgfont
 * https://github.com/poppinlp/svgicons2svgfont
 *
 * Copyright (c) 2013 Nicolas Froidure
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
    var Path = require("path"),
        Fs = require("fs"),
        Package = require("../package.json"),
        svgicons2svgfont = require("svgicons2svgfont");

    // http://en.wikipedia.org/wiki/Private_Use_(Unicode)
    var UNICODE_PRIVATE_USE_AREA = {
        start: 0xE001,
        end: 0xF8FF
    };

    grunt.registerMultiTask("svgicons2svgfont", Package.description, function() {
        this.requiresConfig([this.name, this.target, "src"].join("."));
        this.requiresConfig([this.name, this.target, "dest"].join("."));

        var options = this.options({
                fontName: "iconfont",
                appendCodepoints: false,
                log: grunt.log.ok,
                error: grunt.log.fail
            }),
            done = this.async();

        this.files.forEach(function (files) {
            var usedCodePoints = [],
                curCodepoint = UNICODE_PRIVATE_USE_AREA.start,
                fontDestination = Path.join(files.dest, options.fontName);

            files = files.src.map(function (file) {
                // Creating an object for each icon
                var matches = Path.basename(file).match(/^(?:u([0-9a-f]{4})\-)?(.*).svg$/i),
                    glyph = {
                        name: matches[2],
                        codepoint: 0,
                        file: file,
                        stream: Fs.createReadStream(file)
                    };
                if (matches && matches[1]) {
                    glyph.codepoint = parseInt(matches[1], 16);
                    usedCodePoints.push(glyph.codepoint);
                    return glyph;
                }
                return glyph;
            });

            files = files.map(function (glyph) {
                if(0 === glyph.codepoint) {
                    do {
                        glyph.codepoint = curCodepoint++;
                    } while(-1 !== usedCodePoints.indexOf(glyph.codepoint));
                    usedCodePoints.push(glyph.codepoint);
                    if(options.appendCodepoints) {
                        glyph.stream.on('finish', function() {
                            Fs.rename(glyph.file, Path.dirname(glyph.file) + '/' + 'u' + i.toString(16).toUpperCase() + '-' + glyph.name + '.svg',
                                function(err) {
                                    if(err) {
                                        error("Could not save codepoint: " + 'u' + i.toString(16).toUpperCase() +' for ' + glyph.name + '.svg');
                                    } else {
                                        log("Saved codepoint: " + 'u' + i.toString(16).toUpperCase() +' for ' + glyph.name + '.svg');
                                    }
                                }
                            );
                        });
                    }
                }
                return glyph;
            });

            svgicons2svgfont(files, options).pipe(Fs.createWriteStream(fontDestination + '.svg')).on('finish',done);
        });
    });
};
