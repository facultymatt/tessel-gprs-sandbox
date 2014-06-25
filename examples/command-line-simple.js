// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
Control the GPRS Module from the command line. Useful
for development and testing. 

Reference document:
http://www.simcom.us/act_admin/supportfile/SIM900_HD_V1.01(091226).pdf

!!! Important Note:
some commands are not possible to send in the command line, 
for example Ctrl+Z which is required to end an SMS input. To get 
around this, certain inputs trigger these special commands. 
See the line `if(data === '^z')` below.

You may need to add more depending on your needs.  
*********************************************/

var util = require('util');
var tessel = require('tessel');
var hardware = tessel.port['A'];
var gprslib = require('gprs-sim900'); // Replace '../' with 'gprs-sim900' in your own code

//  Port, callback
var gprs = gprslib.use(hardware);

//  Command the GPRS module via the command line
process.stdin.resume();
process.stdin.on('data', function(data) {
  data = String(data).replace(/[\r\n]*$/, ''); //  Removes the line endings
  // this is a trick to allow ending an input when sending SMS
  // normally pressing Ctrl+Z on a mac send the process into the background
  if (data.toLowerCase() === '^z') {
    data = new Buffer([0x1a]); // Ctrl+Z
    console.log('data override ', data);
  }

  console.log('');
  console.log('sending command ' + [data] + ' to GPRS module...');
  gprs._txrxSimple(data);

});

gprs.on('packet', function(data) {
  console.log('--> ', data);
});







// fin
