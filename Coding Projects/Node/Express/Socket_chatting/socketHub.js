let express = require('express');
let fs = require('fs');

let chatApp = express();
let http = require('http').Server(chatApp);

let io = require('socket.io')(http);

let port = 8000;

chatApp.use(express.static(__dirname + '/public'));

chatApp.get('/', (request, response) => {
  response.sendFile(__dirname + "/public/initial.html");
})

io.on('connection', socket => {
  console.log("User connected")
  socket.on('disconnect', () => {
    console.log("User disconnected")
  })
  socket.on('chat message', message => {
    io.emit('chat message', message);
  })
  socket.on('user join', user => {
    io.emit('user join', user);
  })
})

http.listen(port, () => {
  console.log("Listening to chat")
})
