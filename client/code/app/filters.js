/*global angular */

// client/code/app/filters

/* AngularJS filters */

angular.module('app.filters', []).

  filter('foobar', function () {
    return function (thing) {
      return thing + " blah ";
    };
  }).

  filter('barfoo', function () {
    return function (otherThing) {
      return otherThing + " foo ";
    };
  });