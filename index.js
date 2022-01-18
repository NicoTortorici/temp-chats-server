const httpServer = require('http').createServer();
const socketIO = require('socket.io')(httpServer);

socketIO.on('connection', client => {
    console.log('Connected...', client.id);
});

httpServer.listen(6969)