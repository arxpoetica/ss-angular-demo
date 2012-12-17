/*global angular */

// client/code/app/directives

/* AngularJS directives */

angular.module('app.directives', [])
  .directive('fooBar', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function ($scope, element, attr, ctrl) {

      }
    };
  }).directive('barFoo', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function ($scope, element, attr, ctrl) {

      }
    };
  });