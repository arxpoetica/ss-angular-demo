
// client/code/app/controllers.js

/* AngularJS controllers */

module.exports = function (ngModule) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   *  AppCtrl - top-level routing stuff
   * --------------------------------------------------------------------------
   */
  ngModule.controller('AppCtrl', ['$scope', '$route', '$routeParams', function ($scope, $route, $routeParams) {

    var render = function () {
      // action is something like 'home.view'
      var action = $route.current.action,
      // path becomes ['home', 'view']
        path = (action && action.split('.')) || [];

      // you can use path array to build more complex
      // views within views by having a hierarchy defined

      $scope.action = action;
      $scope.path = path;

      $scope.isHome = (path[0] === 'home');
      $scope.isFoo = (path[0] === 'foo');
      $scope.isBar = (path[0] === 'bar');
    };

    // updates whenever route changes
    $scope.$on('$routeChangeSuccess', function (scopr, next, current) {
      render();
    });
  }]);

  /**
   * --------------------------------------------------------------------------
   *  NavCtrl - bootstrap top-level navbar
   * --------------------------------------------------------------------------
   */
  ngModule.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (clicked) {
      if (!clicked) { return ''; }
      var path = $location.path(),
        location = (path) ? path.substring(1) : '';

      return location === clicked ? 'active' : '';
    };
  }]);

  ngModule.controller('HomeCtrl', ['$scope', 'pubsub', function ($scope, pubsub) {
    
    $scope.date = 'never';

    $scope.$on('foo:bar', function (evt, msg) {
      $scope.date = msg.toString();
    });
  }]);

  /**
   * --------------------------------------------------------------------------
   *  FooCtrl - foo page
   * --------------------------------------------------------------------------
   */
  ngModule.controller('FooCtrl', ['$scope', 'rpc', 'pubsub', function ($scope, rpc, pubsub) {

    $scope.persons = [];

    // fetch list of people
    var promise = rpc.exec('demoRpc.get', 'hello');
    promise.then(
      // success
      function (msg) {
        $scope.persons = msg;
        console.log($scope.persons);
      },
      // error
      function (err) {
        console.log(err);
      }
    );


    $scope.select = function (index, person) {
      if($scope.selectedPerson === person) {
        $scope.selectedPerson = undefined;
      } else {
        $scope.selectedPerson = person;
      }
    };

    $scope.isSelected = function (index, person) {
      return ($scope.selectedPerson === person) ? "active" : "";
    };

  }]);

  /**
   * --------------------------------------------------------------------------
   *  BarCtrl - bar page
   * --------------------------------------------------------------------------
   */
  ngModule.controller('BarCtrl', ['$scope', function ($scope) {

  }]);
};