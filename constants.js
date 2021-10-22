const host = 'localhost';
const port = 50541;
const movement = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};
const messages = {
  1: 'Hello!',
  2: 'Welcome!',
  3: 'I\'m the longest one!',
  4: 'I\'m hungry!',
  5: 'I can\'t eat anymore!'
};
const names = process.argv[2] ? process.argv[2] : 'UNK';

module.exports = { host, port, movement, messages, names };