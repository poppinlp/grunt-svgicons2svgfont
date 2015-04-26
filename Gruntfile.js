module.exports = function(grunt) {
  var testResultDir = __dirname + '/test/results/';

  grunt.file.mkdir(testResultDir);

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      tests: [testResultDir + '*.svg']
    },

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

    svgicons2svgfont: {
      testprefixedicons: {
        options: {
          fontName: "test-prefixedicons-font",
          appendCodepoints: true
        },
        src: "test/fixtures/prefixedicons/*.svg",
        dest: testResultDir
      },
      testoriginalicons: {
        options: {
          fontName: "my-test-font"
        },
        src: "test/fixtures/originalicons/*.svg",
        dest: testResultDir
      },
      testcleanicons: {
        options: {
          fontName: "test-cleanicons-font"
        },
        src: "test/fixtures/cleanicons/*.svg",
        dest: testResultDir
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
