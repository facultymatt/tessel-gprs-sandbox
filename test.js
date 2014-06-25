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