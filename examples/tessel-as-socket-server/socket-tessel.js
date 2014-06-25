var net = require('net');

//var IP = '172.16.31.170'; 
var IP = require('os').networkInterfaces().en1 ?
  require('os').networkInterfaces().en1[0].address :
  '127.0.0.1';

var server = net.createServer(function(socket) {
  socket.write('Hello\r\n');
  socket.write('This is your Tessel talking\r\n');
  socket.write('I\'m opening a pipe with you...\r\n');
  setTimeout(function() {
    socket.write(new Date().toString());
  }, 200);
  socket.pipe(socket); // this should send back any data we send it

  // socket.on('data', function(data) {
  //   console.log('Received from local connection: ' + data);
  // });

});

server.listen(1337, IP);

console.log('Tessel listening on IP: ' + IP);
