const host = 'localhost';
const port = 50541;
const keys = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  1: 'Say: Hello!',
  2: 'Say: Welcome!',
  3: 'Say: I\'m the longest one!',
  4: 'Say: I\'m hungry!',
  5: 'Say: I can\'t eat anymore!'
};
const names = process.argv[2] ? process.argv[2] : 'UNK'

module.exports = { host, port, keys, names };