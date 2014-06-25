var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('Hello\r\n');
  socket.write('This is your Tessel talking\r\n');
  socket.write('I\'m opening a pipe with you...\r\n');
  setTimeout(function() {
    socket.write(new Date().toString());
  }, 200);
  
  //socket.pipe(socket); // this should send back any data we send it

  socket.on('data', function(data) {
    console.log('Received from local connection: ' + data);
    socket.write('Hello\r\n');
  });

  socket.on('connect', function(data) {
    console.log('Received from local connection: ' + data);
  });

});

server.listen(1337);

console.log('Tessel listening...');
