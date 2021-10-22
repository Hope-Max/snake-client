// TCP connection
const net = require('net');
const { host, port, names } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ host, port });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write(`Name: ${names}`);
  });
  // Listen for the data event and receive messages from server 
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  return conn;
};

module.exports = { connect };