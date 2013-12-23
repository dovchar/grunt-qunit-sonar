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
    |	TEST-projects-tools-grunt.xml
    |
    ```

3. Create pom file for sonar.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
    <groupId>Your-group-id</groupId>
    <artifactId>ModuleName</artifactId>
    <version>1.0</version>
    <packaging>pom</packaging>
    <name>Name your module</name>
    <properties>

        <sonar.language>js</sonar.language>

        <sonar.login>SonarLogin</sonar.login>
        <sonar.password>SonarPassword</sonar.password>

        <sonar.dynamicAnalysis>reuseReports</sonar.dynamicAnalysis>
        <sonar.javascript.lslint.browser>true</sonar.javascript.lslint.browser>
        <reportsDirectory>/path/to/outDir</reportsDirectory>

        <sonar.javascript.jstestdriver.reportsfolder>/path/to/outDir/</sonar.javascript.jstestdriver.reportsfolder>
        <sonar.javascript.lcov.reportPath>/path/to/outDir/jsTestDriver.conf-coverage.dat</sonar.javascript.lcov.reportPath>

        <path.to.browser></path.to.browser>
        <sonar.host.url>url-to-sonar-server</sonar.host.url>
        <sonar.jdbc.driverClassName>DB driver (example: com.microsoft.sqlserver.jdbc.SQLServerDriver)</sonar.jdbc.driverClassName>
        <sonar.jdbc.url>url for sonar DB (example: jdbc:sqlserver://your.sonar.db.ip.or.url;database=SONAR;SelectMethod=Cursor</sonar.jdbc.url>
        <sonar.javascript.lslint.predef></sonar.javascript.lslint.predef>
        <sonar.exclusions></sonar.exclusions>

    </properties>

    <build>
        <sourceDirectory>/path/to/moduleSource/</sourceDirectory>
        <testSourceDirectory>/path/to/testDir/YourModuleTests.js</testSourceDirectory>
        <plugins>
            <plugin>
                <groupId>com.googlecode.jstd-maven-plugin</groupId>
                <artifactId>jstd-maven-plugin</artifactId>
                <version>sonar version (example: 1.3.5.1)</version>
                <configuration>
                    <verbose>true</verbose>
                    <browser>"C:\Program Files\Internet Explorer\iexplore.exe"</browser>
                    <port>9876</port>
                    <testOutput>/path/to/outDir</testOutput>
                </configuration>
                <executions>
                    <execution>
                        <id>run-tests</id>
                        <goals>
                            <goal>test</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <!-- pom.xml, the build/plugins section -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-failsafe-plugin</artifactId>
                <configuration>
                    <reportsDirectory>/path/to/outDir</reportsDirectory>
                </configuration>
            </plugin>
        </plugins>
    </build>
    <scm>
        <connection>scm:svn:http://javascript-plugin-for-sonar.googlecode.com/svn/trunk/sample</connection>
        <developerConnection>scm:svn:http://javascript-plugin-for-sonar.googlecode.com/svn/trunk/sample</developerConnection>
        <url>http://javascript-plugin-for-sonar.googlecode.com</url>
    </scm>

        <!-- JsTestDriver Dependencies -->

    <dependencies>
        <dependency>
            <groupId>com.googlecode.jstd-maven-plugin</groupId>
            <artifactId>jstd-maven-plugin</artifactId>
            <version>1.3.2.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <repositories>
        <repository>
            <id>jstd-maven-plugin google code repo</id>
            <url>http://jstd-maven-plugin.googlecode.com/svn/maven2</url>
        </repository>
    </repositories>

    <pluginRepositories>
        <pluginRepository>
            <id>jstd-maven-plugin google code repo</id>
            <url>http://jstd-maven-plugin.googlecode.com/svn/maven2</url>
        </pluginRepository>
    </pluginRepositories>

</project>
```
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