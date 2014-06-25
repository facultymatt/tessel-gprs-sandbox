This example demonstrates how to run the tessel as a socket server. 

This could be useful if you wanted the tessel to collect data and pipe it out to any clients listening. 

To run demo: 

1. Connect the tessel to a network. Connect your laptop to the same network.
2. Then start server on the tessel: `tessel run socket-tessel.js`
3. This will log the IP of the tessel, copy this into the server-local.js script
4. run the local server: `node server-local.js` in a new terminal window. 
