const fs = require('fs');
const http = require('http');

let inputStandard = process.openStdin();

let fileName = "";
let inputText = "";

console.log("Write a filename")

inputStandard.addListener('data', inputLine => {
  fs.readFile(inputLine.toString().trim(), (err, data) => {
    console.log(data.toString().trim())
  })
})
