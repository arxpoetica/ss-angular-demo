var assert = chai.assert,
  expect = chai.expect,
  should = chai.should();

var $controller, $location, $route, $routeParams, $rootScope;

describe('Controller Tests', function () {

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $location = $injector.get('$location');
    $route = $injector.get('$route');
    $routeParams = $injector.get('$routeParams');
  }));

  describe('FooCtrl', function () {

    var params, ctrl, scope;

    beforeEach(function () {
      scope = $rootScope.$new();
      params = { $scope: scope };
      ctrl = $controller('FooCtrl', params);
    });

    it('should pass something', function () {
      expect(true).to.be.true;
    });

    it('should fail something', function () {
      expect(false).to.be.true;
    });

  }); // end FooCtrl tests

}); // end controller tests