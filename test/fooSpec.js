
var sinon = require('sinon')
  , should = require('should');

describe('foo', function () {

  before(function (done) {
    done();
  });

  after(function (done) {
    done();
  });

  beforeEach(function (done) {
    done();
  });

  afterEach(function (done) {
    done();
  });

  it('should pass something', function (done) {
   true.should.be.true;
   done();
  });

  it('should fail something', function (done) {
    false.should.be.true;
    done();
  });

});