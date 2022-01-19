import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost');

ws.on('open', function open() {
  console.log('connection open');
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});