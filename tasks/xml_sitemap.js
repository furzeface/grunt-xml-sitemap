/*
 * grunt-xml-sitemap
 * https://github.com/furzeface/grunt-xml-sitemap
 *
 * Copyright (c) 2014 Daniel Furze
 * Licensed under the MIT license.
 */

 'use strict';

 module.exports = function (grunt) {

  // Require dependencies
  var builder = require('xmlbuilder'),
  fs = require('fs'),
  superb = require('superb'),
  chalk = require('chalk');

  // Read in package.json
  var pkg = grunt.file.readJSON('./package.json');

  // Register task
  grunt.registerMultiTask('xml_sitemap', 'Grunt plugin for generating XML sitemaps for search engine indexing.', function () {

    // Merge task-specific and/or target-specific options with these defaults
    var options = this.options({
      changefreq: 'weekly',
      dest: 'tmp/',
      fileName: 'sitemap',
      siteRoot: pkg.homepage,
      stripIndex: true,
      lastMod: grunt.template.today('yyyy-mm-dd\'T\'HH:MM:ss.000\'Z\''),
      priority: '0.5'
    });

    // Resolve options.siteRoot, add '/' if needed
    var siteRoot = (options.siteRoot.slice(-1) === '/') ? options.siteRoot: options.siteRoot + '/';

    var root = require('xmlbuilder').create('root',
      {version: '1.0', encoding: 'UTF-8', standalone: true},
      {pubID: null, sysID: null},
      {allowSurrogateChars: false, skipNullAttributes: false,
        headless: false, ignoreDecorators: false, stringify: {}});

    // Build XML string
    var feed = builder.create('feed', {
      version: '1.0',
      encoding: 'UTF-8'
    });

    var urlset = feed.ele('urlset').att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
    .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

    this.filesSrc.forEach(function(file) {
      // Create XML node for each entry
      var url = urlset.ele('url');

      if (options.stripIndex) {
        file = file.replace('index.html', '');
      }

      url.ele('loc').txt(siteRoot + file);
      url.ele('lastmod').txt(options.lastMod);
      url.ele('changefreq').txt(options.changefreq);
      url.ele('priority').txt(options.priority);
    });

    // Format XML string
    var xmlString = feed.end({
      pretty: true,
      indent: '  ',
      newline: '\n'
    });

    // Resolve options.dest, add '/' if needed
    var fileDest = (options.dest.slice(-1) === '/') ? options.dest: options.dest + '/',
    fileName = options.fileName + '.xml';

    // Write XML to file
    grunt.file.write(fileDest + fileName, xmlString);

    // Format and print a success message!
    var sup = superb();
    sup = sup.charAt(0).toUpperCase() + sup.slice(1) + '!';

    grunt.log.writeln(chalk.yellow(sup) + chalk.blue(' File "' + fileDest + fileName + '" created.'));
  });

};
