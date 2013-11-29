var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.svgfont = {
  setUp: function(done) {
    done();
  },
  svg_font_file_creation: function(test) {
    test.expect(3);

    var actual = fs.readFileSync('test/results/test-cleanicons-font.svg','utf8');
    var expected = fs.readFileSync('test/expected/test-cleanicons-font.svg','utf8');
    test.equal(actual, expected, "Cleanicons results should be correct.");

    actual = fs.readFileSync('test/results/test-prefixedicons-font.svg','utf8');
    expected = fs.readFileSync('test/expected/test-prefixedicons-font.svg','utf8');
    test.equal(actual, expected, "Prefixedicons results should be correct.");

    actual = fs.readFileSync('test/results/my-test-font.svg','utf8');
    expected = fs.readFileSync('test/expected/my-test-font.svg','utf8');
    test.equal(actual, expected, "Testicons results should be correct.");

    test.done();
  }
};
