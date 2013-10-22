// server/routes/demoRoute.js

// we can apply middleware to http requests as well as rpc
var mw = require('../middleware/demoMiddleware.js');

console.log(mw);

/**
 * This is a sample routing configuration for 
 * ExpressJS.  You can add one or multiple routes 
 * here, for the express purpose of serving explicit
 * HTTP requests.  I do this mostly to bolt on 
 * a standard RESTful/JSON api for other clients
 */
var route = (function () {

  return {

    /**
     * Pass in the socketstream object in case you want to use pubsub from
     * within the route code
     *   
     * @param  {Object} app ExpressJS app
     * @param  {Object} ss  SocketStream object
     */
    init: function (app, ss) {

      // socketstream obj
      this.ss = ss;

      // add standard express 3.0 routes here
      // if you need to build up web service api
    
      // here we apply 'mw' middleware before serving the /demo request
      // [ http://host:port/demo ] will get you here
      app.get('/demo', mw.foobar(), function (req, res) {

        console.log("Here's what foobar middleware has to say " + req.foobar);

        // we can pubsub through socketstream here, too
        ss.api.publish.all('foo:bar', 'foo:bar was called');

        return res.json({response: "you just got foo'd"});
      });
    }
  };

}());

module.exports = route;
