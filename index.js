const { server } = require('websocket');

const app = require('express')()

const http = require('http').createServer(app)
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  console.log('server is running') 
  //res.send("Node Server is running. Yay!!")
})

io.on('connection',socket => {
    console.log('a user connected'); 
    });

server.listen();
