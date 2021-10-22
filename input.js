const { movement, messages } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function() {
    stdin.on('data', (key) => {
      
      if (key === '\u0003') {
        process.exit();
      }

      // Movement commands
      connection.write(`Move: ${movement[key]}`);

      // Canned messages
      if (messages[key]) {
        const message = messages[key];
        connection.write(`Say: ${message}`);
      }
      
    });
  };

  handleUserInput();
  return stdin;
};

module.exports =  { setupInput };