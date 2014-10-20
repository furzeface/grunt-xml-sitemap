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

  // Time all of the things
  require('time-grunt')(grunt);

  // Project configuration
  grunt.initConfig({
    // Config
    config: {
      gruntfile: 'Gruntfile.js',
      tasks: 'tasks',
      tests: 'test',
      tmp: 'tmp'
    },

    // Watchers for development
    watch: {
      gruntfile: {
        files: '<%= config.gruntfile %>',
        tasks: [
        'jshint:gruntfile'
        ]
      },
      tasks: {
        files: '<%= config.tasks %>/**/*.js',
        tasks: [
        'jshint:tasks',
        'test'
        ]
      },
      test: {
        files: '<%= config.tests %>/**/*_test.js',
        tasks: [
        'jshint:tests',
        'nodeunit'
        ]
      }
    },


    // Housekeeping tasks
    clean: {
      tests: [
      '<%= config.tmp %>'
      ]
    },


    // Script tasks
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: [
      '<%= config.gruntfile %>',
      ],
      tasks: [
      '<%= config.tasks %>/*.js',
      ],
      tests: [
      '<%= nodeunit.tests %>'
      ]
    },


    // Tests
    nodeunit: {
      tests: [
      '<%= config.tests %>/*_test.js'
      ]
    },


    // Configuration to be run (and then tested).
    xml_sitemap: {
      default_options: {
        options: {
        },
        files: [
        {
          expand: true,
          cwd: '<%= config.tests %>/fixtures',
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
          cwd: '<%= config.tests %>/fixtures',
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
          cwd: '<%= config.tests %>/fixtures',
          src: [
          '**/*.html',
          '!exclude/**/*.html'
          ]
        }
        ]
      }
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
