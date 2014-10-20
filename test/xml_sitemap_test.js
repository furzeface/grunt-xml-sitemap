'use strict';

var grunt = require('grunt');

exports.xml_sitemap = {
  setUp: function (done) {
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/sitemap.xml'),
    expected = grunt.file.read('test/expected/sitemap.xml');

    test.notEqual(actual, expected, 'should produce an XML sitemap with default options.');

    test.done();
  },
  default_options_lastmod: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/sitemap-lastmod.xml'),
    expected = grunt.file.read('test/expected/sitemap-lastmod.xml');

    test.equal(actual, expected, 'should produce an XML sitemap with default options and different lastmod datetimes.');

    test.done();
  },
  custom_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/sitemap-custom.xml'),
    expected = grunt.file.read('test/expected/sitemap-custom.xml');

    test.equal(actual, expected, 'should produce an XML sitemap with custom options.');

    test.done();
  }
};
