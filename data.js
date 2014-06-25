// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

var tessel = require('tessel');
var hardware = tessel.port['A'];
var gprslib = require('gprs-sim900');

var phoneNumber = '16093354417'; // Replace the #s with the String representation of the phone number, including country code (1 for USA)
var message = 'Text from a Tessel!';

//  Port, callback
var gprs = gprslib.use(hardware); 

gprs.on('ready', function() {
  console.log('GPRS module connected to Tessel. Searching for network...')
  //  Give it 10 more seconds to connect to the network, then try to send an SMS
  setTimeout(function() {    

    gprs.requestGET('http://posttestserver.com/post.php?dir=mattmiller', function requestGETCallback(err, data) {
      console.log('err: ', err);
      console.log('result: ', data);
    });

  }, 10000);
});

gprs.on('+', function handlePlus (data) {
  console.log('Got an unsolicited message that begins with a \'+\'! Data:', data);
});

//  Command the GPRS module via the command line
process.stdin.resume();
process.stdin.on('data', function (data) {
  data = String(data).replace(/[\r\n]*$/, '');  //  Removes the line endings
  console.log('got command', [data]);
  gprs._txrx(data, 10000, function(err, data) {
    console.log('\nreply:\nerr:\t', err, '\ndata:');
    data.forEach(function(d) {
      console.log('\t' + d);
    });
    console.log('');
  });
});

//  Handle errors
gprs.on('error', function (err) {
  console.log('Got an error of some kind:\n', err);
});