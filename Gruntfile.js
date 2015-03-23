module.exports = function(grunt) {
  var testResultDir = __dirname + '/test/results/';

  grunt.file.mkdir(testResultDir);

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    testResult: testResultDir,

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
      tests: ["<%= testResult %>*"]
    },

    svgicons2svgfont: {
      testprefixedicons: {
        options: {
          font: "test-prefixedicons-font",
          onlyFonts: true,
          appendCodepoints: true
        },
        src: "test/fixtures/prefixedicons/*.svg",
        dest: "<%= testResult %>"
      },
      testoriginalicons: {
        options: {
          font: "my-test-font",
          onlyFonts: true
        },
        src: "test/fixtures/originalicons/*.svg",
        dest: "<%= testResult %>"
      },
      testcleanicons: {
        options: {
          font: "test-cleanicons-font",
          onlyFonts: false
        },
        src: "test/fixtures/cleanicons/*.svg",
        dest: "<%= testResult %>"
      }
    },

    nodeunit: {
      tests: ["test/*.nodeunit.js"]
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
