require('fs').mkdirSync(__dirname+"/test/results/");

module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    temp: __dirname+"/test/results/",

    bump: {
      options: {
        files: ["package.json"],
        commit: true,
        commitMessage: "Release v%VERSION%",
        commitFiles: ["-a"],
        createTag: true,
        tagName: "v%VERSION%",
        tagMessage: "Version %VERSION%",
        push: true,
        pushTo: "origin",
        gitDescribeOptions: "--tags --always --abbrev=1 --dirty=-d"
      }
    },

    clean: {
      tests: ["<%= temp %>*"],
    },

    svgicons2svgfont: {
      testprefixedicons: {
        options: {
          font: "test-prefixedicons-font",
          onlyFonts: true,
          appendCodepoints: true
        },
        src: "test/fixtures/prefixedicons/*.svg",
        dest: "<%= temp %>"
      },
      testoriginalicons: {
        options: {
          font: "my-test-font",
          onlyFonts: true
        },
        src: "test/fixtures/originalicons/*.svg",
        dest: "<%= temp %>"
      },
      testcleanicons: {
        options: {
          font: "test-cleanicons-font",
          onlyFonts: false
        },
        src: "test/fixtures/cleanicons/*.svg",
        dest: "<%= temp %>"
      }
    },

    nodeunit: {
      tests: ["test/*.nodeunit.js"],
    }
  });

  grunt.loadTasks("tasks");

  grunt.registerTask("default", ["test"]);
  grunt.registerTask("test", [
    "clean:tests",
    "svgicons2svgfont:testcleanicons",
    "svgicons2svgfont:testprefixedicons",
    "svgicons2svgfont:testoriginalicons",
    "nodeunit:tests",
    "clean:tests"
  ]);
};
