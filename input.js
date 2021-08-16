const { keys} = require('./constants');
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

      if (Object.keys(keys).includes(key)) {
        connection.write(keys[key]);
      }

    });
  };

  handleUserInput();
  return stdin;
};

module.exports =  { setupInput };