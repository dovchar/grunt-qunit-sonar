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

## How it works

1. Run qunit-sonar task from from directory where you store Gruntfile.js:

```js
grunt qunit-sonar

//or just grunt if qunit-sonar is a default task

grunt
```

2. In your outDir directory you should see something like this:

```js
|-outDir
|--
|	|--in
|	|--out
|	jsTestDriver.conf-coverage.dat
|	TEST-projects-Gryphon-tools-grunt.xml
|
```

3. Create pom file for sonar.

4. So now we should send generated reports (jsTestDriver.conf-coverage.dat, TEST-projects-Gryphon-tools-grunt.xml) to sonar qube. 
We will use maven for this (http://maven.apache.org/download.cgi). If you use sonar v3.6+ you can use maven Maven 3.1+. If your sonar version less than v3.6 I would recomend to use Maven 3.0.5.

Example:

```js
mvn -X -f "PATH_TO_YOUR_POM_FILE/js_pom.xml" sonar:sonar
```

## Contributing

Please use the issue tracker and pull requests.

## License

Copyright (c) 2013 Dmytro Ovcharenko
Licensed under the MIT license.