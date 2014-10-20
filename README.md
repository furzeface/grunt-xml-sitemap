# grunt-xml-sitemap
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> Grunt plugin for generating XML sitemaps for search engine indexing.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
npm install grunt-xml-sitemap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xml-sitemap');
```

## The 'xml_sitemap' task

### Overview
In your project's Gruntfile, add a section named `xml_sitemap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xml_sitemap: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.changefreq
Type: `String`
Default value: `'weekly'`

A string value that is used to defined the change frequency.

#### options.dest
Type: `String`
Default value: `'tmp/'`

A string value that is used to define the output directory.

#### options.fileName
Type: `String`
Default value: `'sitemap'`

A string value that is used to define the filename (outputs sitemap.xml).

#### options.siteRoot
Type: `String`
Default value: `'pkg.homepage'`

A string value that is used to define the site root of the URL. Defaults to homepage from `package.json`.

#### options.stripIndex
Type: `Bool`
Default value: `true`

A boolean value that is used to determine whether to strip `index.html` from the URL.

#### options.lastMod
Type: `String`
Default value: `grunt.template.today('yyyy-mm-dd\'T\'HH:MM:ss.000\'Z\'')`

A string value that is used to define the last modified date. Defaults to current date using `grunt.template.today( )`.

#### options.priority
Type: `String`
Default value: `'0.5'`

A string value that is used to define the priority.

* * *

### Usage Examples

#### Default Options
In this example, the default options are used to generate the XML sitemap.

```js
grunt.initConfig({
  xml_sitemap: {
    default_options: {
      files: [
        {
          expand: true,
          cwd: 'src/',
          src: [
            '**/*.html'
          ]
        }
      ]
    }
  }
});
```

#### Custom Options
In this example, custom options are used to generate the XML sitemap.

```js
grunt.initConfig({
  xml_sitemap: {
    custom_options: {
      options: {
        changefreq: 'weekly',
        dest: 'tmp/',
        fileName: 'sitemap-custom',
        siteRoot: 'http://daniel.furzeface.com/',
        lastMod: '2014-10-18T09:54:31.000Z',
        priority: '0.8'
      },
      files: [
        {
          expand: true,
          cwd: 'src/',
          src: [
            '**/*.html',
            '!docs/**/*.html'
          ]
        }
      ]
    }
  }
});
```

## Contributing
[![Build Status][travis-image]][travis-url]
[![devDependency Status][dev-dependency-image]][dev-dependency-url]
[![Stories in Ready][waffle-image]][waffle-url]

To contribute either check the [Waffle board](https://waffle.io/furzeface/grunt-xml-sitemap) or [GitHub issues](https://github.com/furzeface/grunt-xml-sitemap/issues) then work away:

* [Fork it](https://github.com/furzeface/grunt-xml-sitemap/fork)!
* Create your feature branch: `git checkout -b feature/awesome-feature`
* Commit your changes: `git commit -m 'feat(Project): Adds awesome feature'`
* Push to the branch: `git push origin feature/awesome-feature`
* Submit a [pull request](https://github.com/furzeface/grunt-xml-sitemap/pulls) :+1:

Tips:
* In lieu of a formal styleguide, take care to maintain the existing coding style. 
* Add unit tests for any new or changed functionality. 
* Test your code using [Grunt](http://gruntjs.com): `grunt test`
* Install [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime) for Sublime Text to help with consistent code formatting.
* Commit messages loosely adhere to [these guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
* Versioning adheres to [Semver](http://semver.org).

* * *

## Release History
- 2014-10-18 v0.1.1 - Adds support for stripping `index.html` if required. 
- 2014-10-18 v0.1.0 - Initial release. 

[![NPM](https://nodei.co/npm/grunt-xml-sitemap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/grunt-xml-sitemap)

## License
Copyright (c) 2014 Daniel Furze. 

Licensed under the MIT license: [http://danielfurze.mit-license.org](http://danielfurze.mit-license.org)


[npm-url]: http://badge.fury.io/js/grunt-xml-sitemap
[npm-image]: https://badge.fury.io/js/grunt-xml-sitemap.svg
[travis-url]: http://travis-ci.org/furzeface/grunt-xml-sitemap
[travis-image]: https://secure.travis-ci.org/furzeface/grunt-xml-sitemap.svg?branch=master
[waffle-url]: https://waffle.io/furzeface/grunt-xml-sitemap
[waffle-image]: https://badge.waffle.io/furzeface/grunt-xml-sitemap.svg?label=ready&title=Ready
[dev-dependency-url]: https://david-dm.org/furzeface/grunt-xml-sitemap#info=devDependencies
[dev-dependency-image]: https://david-dm.org/furzeface/grunt-xml-sitemap/dev-status.svg

