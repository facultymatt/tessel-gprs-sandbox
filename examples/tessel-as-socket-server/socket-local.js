var net = require('net');
var client = new net.Socket();

//var IP = '172.16.31.170';
var IP = '192.168.68.239'; // IP of the tessel

client.connect(1337, IP, function() {
  console.log('Local machine connected to Tessel');
  client.write('Hello, Tessel! Love, Local machine.');
});
 
client.on('data', function(data) {
  console.log('Received from Tessel: ' + data);
  //client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
  console.log('Connection closed');
});