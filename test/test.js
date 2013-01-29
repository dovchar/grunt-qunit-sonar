var assert = require('chai').assert;
var qunit_sonar = require("./../tasks/qunit-sonar");
var phantomHandlers = require("./../tasks/qunit-sonar")
var grunt = require("grunt")

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5), 'foo equal `bar`');
      assert.equal(-1, [1,2,3].indexOf(0), 'foo equal `bar`');
    })
  })
});

describe('Qunit Sonar', function(){
  describe('formatMessage', function(){
    it('should return string; allow an error message to retain its color when split across multiple lines.', function(){
		assert.typeOf(qunit_sonar, 'function', 'phantomHandlers is a object');
    });
  });
});