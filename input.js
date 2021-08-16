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

      switch (key) {
      case 'w':
        connection.write('Move: up');
        break;
      case 'a':
        connection.write('Move: left');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'd':
        connection.write('Move: right');
        break;
      case '1':
        connection.write('Say: Hello!');
        break;
      case '2':
        connection.write('Say: Welcome!');
        break;
      case '3':
        connection.write('Say: I\'m the longest one!');
        break;
      case '4':
        connection.write('Say: I\'m hungry!');
        break;
      case '5':
        connection.write('Say: I can\'t eat anymore!');
        break;
      }

    });
  };

  handleUserInput();
  return stdin;
};

module.exports =  { setupInput };