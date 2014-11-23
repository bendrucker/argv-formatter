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

});
