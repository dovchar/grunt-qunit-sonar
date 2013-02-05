# grunt-qunit-sonar

[Grunt](https://github.com/gruntjs/grunt) plugin for qunit unit test with coverage

## Getting Started

This plugin has two external dependencies, both must be downloaded, extracted and registered in the PATH environment variable:

1. [PhantomJs](http://phantomjs.org/download.html)
2. [JsCoverage](http://siliconforks.com/jscoverage/download.html)

Install the module with: `npm install grunt-unit-sonar`

Then load it from your own `grunt.js` file:

```js
grunt.loadNpmTasks('grunt-qunit-sonar');
```

## Documentation

'qunit-sonar': {
      mysubtask: {
		    "minimum": 0.01, //min coverage; 80% default
		    "srcDir": "src", //your source here 
		    "depDirs": ["tests","libs"], //your depended files
		    "outDir": "test_results", //where you want save reports (LCov and xml)
		    "testFiles": "tests/TestsChart.html" // html file where you include unit tests
		}
    }

 grunt.registerTask('default', 'qunit-sonar');

## Contributing

Please use the issue tracker and pull requests.

## License
Copyright (c) 2013 Dmytro Ovcharenko
Licensed under the MIT license.