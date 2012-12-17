
window.ss = require('socketstream');

ss.server.on('ready', function () {

  $('#warning').modal('hide');

  require('../filters');
  require('../services');
  require('../directives');

  var app = angular.module('app', ['app.filters', 'app.services', 'app.directives']);
  // setup angular routing
  require('/routes')(app);
  // setup angular controllers
  require('/controllers')(app);

  // tests
  require('./specs/controllerSpec.js');
  mocha.run();
});