/*
 * grunt-xml-sitemap
 * https://github.com/furzeface/grunt-xml-sitemap
 *
 * Copyright (c) 2014 Daniel Furze
 * Licensed under the MIT license.
 */

 'use strict';

 module.exports = function (grunt) {

  // Reads package.json and dynamically loads all Grunt tasks
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies',
    pattern: [
    'grunt-*'
    ]
  });

  // Time all the things
  require('time-grunt')(grunt);

  // Project configuration
  grunt.initConfig({
    // Config
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/* <%= pkg.name %> :: Latest build: <%= grunt.template.today(\'dd/mm/yyyy, h:MM:ss TT\') %> */\n'
    },
    config: {
      gruntfile: 'Gruntfile.js',
      tmp: 'tmp',
      test: 'test',
      tasks: 'tasks'
    },

    // Housekeeping tasks
    clean: {
      tests: [
      'tmp'
      ]
    },


    // Script tasks
    jshint: {
      all: [
      '<%= config.gruntfile %>',
      '<%= config.tasks %>/*.js',
      '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },


    // Configuration to be run (and then tested).
    xml_sitemap: {
      default_options: {
        options: {
        },
        files: [
        {
          expand: true,
          cwd: '<%= config.test %>/fixtures',
          src: [
          '**/*.html'
          ]
        }
        ]
      },
      default_options_lastmod: {
        options: {
          fileName: 'sitemap-lastmod',
          lastMod: '2014-10-18T09:54:31.000Z',
          stripIndex: false
        },
        files: [
        {
          expand: true,
          cwd: '<%= config.test %>/fixtures',
          src: [
          '**/*.html'
          ]
        }
        ]
      },
      custom_options: {
        options: {
          changefreq: 'weekly',
          dest: '<%= config.tmp %>/',
          fileName: 'sitemap-custom',
          siteRoot: 'http://daniel.furzeface.com/',
          lastMod: '2014-10-18T09:54:31.000Z',
          priority: '0.8'
        },
        files: [
        {
          expand: true,
          cwd: '<%= config.test %>/fixtures',
          src: [
          '**/*.html',
          '!exclude/**/*.html'
          ]
        }
        ]
      }
    },


    // Test tasks
    nodeunit: {
      tests: [
      '<%= config.test %>/*_test.js'
      ]
    }
  });

  // Load this plugin's task
  grunt.loadTasks('tasks');

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this plugin's task, then test the result
  grunt.registerTask('test', [
    'clean',
    'xml_sitemap',
    'nodeunit'
    ]);

  // By default, lint and run all tests
  grunt.registerTask('default', [
    'jshint',
    'test'
    ]);

};
