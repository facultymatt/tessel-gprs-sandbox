var net = require('net');
var client = new net.Socket();

//var IP = '172.16.31.170';
var IP = '127.0.0.1';

client.connect(1337, IP, function() {
  console.log('Local machine connected to Tessel');
  client.write('Hello, Tessel! Love, Local machine.');
});
 
client.on('data', function(data) {
  console.log('Received: ' + data);
  //client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
  console.log('Connection closed');
});