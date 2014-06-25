// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

var tessel = require('tessel');
var hardware = tessel.port['A'];
var gprslib = require('gprs-sim900');

//  Port, callback
var gprs = gprslib.use(hardware); 

gprs.on('ready', function() {
  console.log('GRPS ready, connecting...');

  gprs.waitForNetworkConnection(1000, function(){}, function() {});

});

//  Handle errors
gprs.on('error', function (err) {
  console.log('Got an error of some kind:\n', err);
});