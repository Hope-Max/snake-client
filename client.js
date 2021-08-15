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
    const moves = ['up', 'left', 'down', 'down', 'right'];
    for (let i = 0; i < moves.length; i++) {
      setTimeout(() => conn.write(`Move: ${moves[i]}`), 1000 + i * 100);
    }
    // setTimeout(() => conn.write('Move: up'), 1050);
    // setTimeout(() => conn.write('Move: left'), 1100);
    // setTimeout(() => conn.write('Move: down'), 1150);
    // setTimeout(() => conn.write('Move: down'), 1200);

    // setInterval((direction) => conn.write(`Move: ${direction}`), 1000, 'up');
  });

  conn.on('data', () => {
    console.log('Server says: you ded cuz you idled');
  });

  // conn.on('data', () => {
  //   process.exit();
  // });

  return conn;
};

module.exports = { connect };