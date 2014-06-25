var net = require('net');

var IP = '192.168.111.135';
var PORT = 1337;

var server = net.createServer(function(socket) {
  socket.write('I\'m opening a pipe with you...\r\n');
  socket.pipe(socket);
});

server.listen(PORT, IP);

console.log('Local server listening on IP: ' + IP + ':' + PORT);
