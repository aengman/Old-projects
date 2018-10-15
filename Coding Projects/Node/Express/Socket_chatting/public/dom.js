let sendBtn = document.getElementById("send");
let joinBtn = document.getElementById("joinChat");
let textToSend = document.getElementById("textToSend");
let alias = document.getElementById("alias");
let userContainer = document.getElementsByClassName("userContainer")[0];
let contentDiv = document.getElementsByClassName('content')[0];
let socket = io();
let userCount = 0;

sendBtn.addEventListener('click', () => {
  let text = textToSend.value;
  socket.emit('chat message', text);
})
joinBtn.addEventListener('click', () => {
  let newUser = document.createElement('div');
  userCount = userContainer.children.length;
  socket.emit('user join', alias.value + " " + userCount)
})


socket.on('chat message', message => {
  let newDiv = document.createElement('div');
  newDiv.innerText = alias.value + " " + message;
  contentDiv.appendChild(newDiv);
})

socket.on('user join', user => {
  let newUser = document.createElement('div');
  newUser.innerText = user;
  userContainer.appendChild(newUser);
})

socket.on('disconnect', () => {

})
