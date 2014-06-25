// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This Bluetooth Low Energy module demo turns
the module on, starts it advertising as a
peripheral, and writes information when
connected.
*********************************************/

var tessel = require('tessel');
var ble = require('ble-ble113a').use(tessel.port['B']); // Replace '../' with 'ble-ble113a' in your own code

var interval;

var DEVICE_NAME = 'Tessel';

var buffer = new Buffer(DEVICE_NAME);
console.log(floatArrayToBuffer(buffer));


function floatArrayToBuffer(array){
  var buf = new Buffer(array.length*4);
  for (var i=0; i < array.length; i++){
    buf.writeFloatLE(array[i], i*4);
  }
  return buf;
}

ble.on('ready', function(err) {
  if (err) return console.log(err);
  console.log('started advertising...');

  var NAME = [0x02, 0x01, 0x06, 0x07, 0x08, 0x54, 0x65, 0x73, 0x73, 0x65, 0x6c];
  
  ble.setAdvertisingData(NAME, function() {
    ble.startAdvertising();  
  });

});

ble.on('connect', function() {
  console.log("We have a connection to master.");
  var value = 0;
  interval = setInterval(function iteration() {
    var str = "Interval #" + value++;
    console.log("Writing out: ", str);

    ble.writeLocalValue(2, new Buffer(str));
  }, 1000);
});

ble.on('disconnect', function() {
  // Stop our interval
  clearInterval(interval);
  // Start advertising again
  ble.startAdvertising();
});