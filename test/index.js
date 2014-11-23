'use strict';

var expect    = require('chai').expect;
var formatter = require('../');

describe('argv-formatter', function () {

  function assert (input, output) {
    expect(formatter.format(input)).to.deep.equal(output);
  }

  it('can handle single character keys', function () {
    assert({R: 'spec'}, ['-R', 'spec']);
  });

  it('can handle multi character keys', function () {
    assert({reporter: 'spec'}, ['--reporter=spec']);
  });

  it('removes falsy arguments', function () {
    assert({reporter: false}, []);
  });

  it('only includes a flag for true (single)', function () {
    assert({R: true}, ['-R']);
  });

  it('only includes a flag for true (multi)', function () {
    assert({reporter: true}, ['--reporter']);
  });

  it('stringifies object values (single)', function () {
    assert({O: {
      toString: function () {
        return 'value';
      }
    }}, ['-O', 'value']);
  });

  it('stringifies object values (single)', function () {
    assert({O: {
      toString: function () {
        return 'value';
      }
    }}, ['-O', 'value']);
  });

  it('stringifies object values (optionless)', function () {
    assert({_: {
      toString: function () {
        return 'value';
      }
    }}, ['value']);
  });

  it('can handle one non-option argument', function () {
    assert({_: 'foo'}, ['foo']);
  });

  it('can handle multiple non-option arguments', function () {
    assert({_: ['foo', 'bar']}, ['foo', 'bar']);
  });

});
