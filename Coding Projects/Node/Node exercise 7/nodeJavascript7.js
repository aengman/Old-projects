const fs = require('fs');

const readFileJs = require('./requiredReading.js');
const writeFileJs = require('./requiredWriting.js');

let consoler = process.openStdin();

let inputHandler = (input) => {
  if(input.toString().trim() == "read"){
    consoler.removeListener('data', inputHandler);
    startConsoleRead();
  }
  else if (input.toString().trim() == "write"){
    consoler.removeListener('data', inputHandler);
    startConsoleWrite();
  }
  else {
    console.log("Incorrect string")
  }
}

startProgram();

function startProgram(){
  console.log("Write 'read' or 'write'");
  consoler.addListener('data', inputHandler)
}

function startConsoleRead(){
  console.log("Write a filename");
  consoler.addListener('data', input => {
    readFileJs.reader(input.toString().trim());
  })
}

function startConsoleWrite(){
  console.log("write a filename");
  consoler.addListener('data', input => {
    if(writeFileJs.file == ""){
      writeFileJs.file = input.toString().trim();
      console.log("write content");
    }
    else {
      writeFileJs.content = input.toString();
      writeFileJs.writer(writeFileJs.file, writeFileJs.content);
    }
  })
}
