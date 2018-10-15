let express = require('express');
let fs = require('fs');

let chatApp = express();
let http = require('http').Server(chatApp);

let io = require('socket.io')(http);

let port = 3000;

chatApp.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
})

io.on('connection', socket => {
  console.log("io connection")
})

http.listen(port, () => {
  console.log("listening to chat")
})
