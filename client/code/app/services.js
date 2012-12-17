/*global angular */

// /client/code/app/services.js

/* AngularJS services */

/*
  Credit due to https://github.com/polidore/ss-angular for 
  figuring out a good way to wrap socketstream RPC and pubsub
  as an angular service.  The code for the rpc and pubsub
  services we taken / derived from there.
 */

angular.module('app.services', []).
  factory('rpc', ['$q', '$rootScope', function ($q, $rootScope) {
    console.log('rpc service created');

    return {

      exec: function (command) {
      
        var args = Array.prototype.slice.apply(arguments),
          deferred = $q.defer();
        
        // apply ss.rpc with array ['demoRpc.foobar', arg2, arg3], {callback}]
        ss.rpc.apply(ss, [command].concat(args.slice(1, args.length)).concat(function (err, res) {
          $rootScope.$apply(function (scope) {
            if (err) {
              return deferred.reject(err);
            }
            return deferred.resolve(res);
          });
        }));
      
        return deferred.promise;
      },

      // use cache across controllers for client-side caching
      cache: {} 
    };
  }]).
  factory('pubsub', ['$rootScope', function ($rootScope) {
    console.log('pubsub service created');
    
    // override the $on function
    var old$on = $rootScope.$on, json;
    Object.getPrototypeOf($rootScope).$on = function (name, listener) {
      var scope = this;
      ss.event.on(name, function (message) {
        scope.$apply(function (s) {
          if (message) {
            try {
              // broadcast with json payload
              json = JSON.parse(message);
              scope.$broadcast(name, message);
            } catch (err) {
              // broadcast with non-json payload
              scope.$broadcast(name, message);
            }
          } else {
            // broadcast with no payload (i.e. event happened)
            scope.$broadcast(name);
          }
        });
      });

      // call angular's $on version
      old$on.apply(this, arguments);
    }; // end $on redefinition
  }]);

