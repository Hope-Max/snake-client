# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["screenshot of the game board"](#)
!["screenshot of the movement and messages"](#)

## Functionalities

- Movement
  - Key 'w': move up one square (unless facing down)
  - Key 's': move down one square (unless facing up)
  - Key 'a': move left one square (unless facing right)
  - Key 'd': move left one square (unless facing left)
- Messages
  - Key '1': 'Hello!'
  - Key '2': 'Welcome!'
  - Key '3': 'I\'m the longest one!'
  - Key '4': 'I\'m hungry!'
  - Key '5': 'I can\'t eat anymore!'

## Getting Started

- Follow steps to install and start the local server
  - git clone https://github.com/lighthouse-labs/snek-multiplayer.git
  - cd snek-multiplayer
  - npm install
  - npm run play
- Run the development snake client using the `node play.js` command.