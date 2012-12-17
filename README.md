# This is a seed project for a web app that uses
* [SocketStream](http://socketstream.com)
* [ExpressJS](http://expressjs.com/)
* [AngularJS](http://angularjs.org)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [Jade Templates](http://jade-lang.com/) 
* [MochaJS](http://visionmedia.github.com/mocha/) _testing_
* [SinonJS](http://sinonjs.org/) _testing_

I'm using it to seed new web apps, and as a playground for quickly trying new things.

```sh
$ npm install
$ node app.js
```

To run server side tests

```sh
$ make
```

To run client side tests

```sh
$ node app.js
```

...then open browser to http://localhost:3000/tests

## Routing Examples

Demo app has some routes that are 100% client side, and some that are server-side...meaning client side routes are intercepted by Angular and handled in the browser, since this is a single page app.  Conversely, server side routes are handled as new HTTP request to the browser which are processed by ExpressJS routing -- demonstration of how one can still provide a web service API on top of the SocketStream RPC/WebSocket application (e.g. for other clients or integration points).

### Client Side Routing

Handled by [route.js](https://github.com/americanyak/ss-angular-demo/blob/master/client/code/app/routes.js) and [AppCtrl](https://github.com/americanyak/ss-angular-demo/blob/master/client/code/app/controllers.js#L14) and the [AngularJS ng-switch](http://docs.angularjs.org/api/ng.directive:ngSwitch) directive.

Example Routes
* http://localhost:3000/foo
* http://localhost:3000/bar

There is a controller for each route.

### Server Side Routing

Any JS files found under [routes](https://github.com/americanyak/ss-angular-demo/tree/master/server/routes) dir will be added to ExpressJS routing processor.  There is a [demoRoute.js](https://github.com/americanyak/ss-angular-demo/blob/master/server/routes/demoRoute.js) which shows a standard web service request that returns some JSON

* http://localhost:3000/demo

There's also an [example of shared middleware](https://github.com/americanyak/ss-angular-demo/blob/master/server/middleware/demoMiddleware.js) -- a piece of middleware that can be injected into the path for both websockets and standard ExpressJS http routes.  

That piece of middleware will run if a client hits http://localhost:3000/demo and it will also run if they call `ss.rpc('demoRpc.get', function (err, resp) { });`

# Credit Due

* [@polidore](https://github.com/polidore/ss-angular) - the angular services in here that wrap socket stream `rpc` and `pubsub` were derived / borrowed from the ss-angular project
* Pierre-Yves Gérardy for his [great ideas on setting up client side unit testing with SocketStream + AngularJS](https://groups.google.com/forum/#!topic/socketstream/jDDCkQJpsDM/discussion)

