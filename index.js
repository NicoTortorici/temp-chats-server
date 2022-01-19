const express = require('express');
const Logger = require('nodemon/lib/utils/log');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

var sockets = {};

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  const io = socketIO(server);

  io.on('connection', (socket) => {
    var username = null;

    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));

    socket.on('login', name => {
      sockets[name] = socket;
      username = name;

      console.log('User logged in: ' + name);
    });

    socket.on('message', args => {
      if (receiver in sockets) {
        sockets[receiver].emit('message', args['username'], args['content']);
      }
    })
  });
