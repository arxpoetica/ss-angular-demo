// server/middleware/demoMiddleware.js

// middleware function
exports.foobar = function () {

  /**
   * This is a middleware function that 
   * can be applied to both websockets and http
   * requests.  This middleware is being applied
   * to both 'server/routes/demoRoute.js' and 'server/rpc/demoRpc.js'
   * @param  {Object}   req  request object
   * @param  {Object}   res  response object
   * @param  {Function} next next middleware function in chain
   * @return {Void}        nothing
   */
  return function (req, res, next) {

    // tack a 'foo' property on req object just to show how this works
    if (req) {
      req.foobar = 'Hi, from foo.bar middleware';
    }
    // must call next on success, or next(err) if you want to bail
    return next();
  };
};