// This file automatically gets called first by SocketStream and must always exist

// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');

// these are standalone angular modules
require('/filters');
require('/services');
require('/directives');

// this is the angular application
var app = angular.module('app', ['app.filters', 'app.services', 'app.directives']);

// configure angular routing
require('/routes')(app);

// setup angular controllers
require('/controllers')(app);

ss.server.on('disconnect', function(){
  $('#warning').modal('show');
});

ss.server.on('reconnect', function(){
  $('#warning').modal('hide');
});

ss.server.on('ready', function(){

  // Wait for the DOM to finish loading
  jQuery(function(){
    // no-op
  });

});
