// server/rpc/demoRpc.js

exports.actions = function (req, res, ss) {

  // use session middleware
  req.use('session');

  // use foo middleware
  req.use('demoMiddleware.foobar');

  // stupid mock date we return
  var foos = [
    { firstname: 'foo', lastname: 'jones' },
    { firstname: 'jiminy', lastname: 'rickets' }
  ];

  return {

    // call in client like ss.rpc('foo.get', function (err, obj) {});
    get: function () {

      console.log("here's what foo middleware has to say: " + req.foobar);

      // standard res(err, obj)
      //   err: an error if it occurred, else null
      //   obj: the obj result to return if no error
      return res(null, foos);
    }

    // add more rpc functions as needed
  };

};