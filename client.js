const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
  });

  conn.on('connect', () => {
    conn.write('Name: Max');
  });

  conn.on('data', () => {
    console.log('Server says: you ded cuz you idled');
  });
  return conn;
};

module.exports = { connect };