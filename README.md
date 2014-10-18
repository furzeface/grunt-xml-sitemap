# grunt-xml-sitemap
[![Build Status][travis-image]][travis-url]
[![devDependency Status][dev-dependency-image]][dev-dependency-url]
[![Stories in Ready][waffle-image]][waffle-url]

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

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  xml_sitemap: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  xml_sitemap: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Daniel Furze. 

Licensed under the MIT license: [http://danielfurze.mit-license.org](http://danielfurze.mit-license.org)

[travis-url]: http://travis-ci.org/furzeface/grunt-xml-sitemap
[travis-image]: https://secure.travis-ci.org/furzeface/grunt-xml-sitemap.svg?branch=master
[waffle-url]: https://waffle.io/furzeface/grunt-xml-sitemap
[waffle-image]: https://badge.waffle.io/furzeface/grunt-xml-sitemap.svg?label=ready&title=Ready
[dev-dependency-url]: https://david-dm.org/furzeface/grunt-xml-sitemap#info=devDependencies
[dev-dependency-image]: https://david-dm.org/furzeface/grunt-xml-sitemap/dev-status.svg

