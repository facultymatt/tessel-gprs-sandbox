var expect = require('expect.js'),
    spTesselGpsTest = require('..');

describe('sp-tessel-gps-test', function() {
  it('should say hello', function(done) {
    expect(spTesselGpsTest()).to.equal('Hello, world');
    done();
  });
});
