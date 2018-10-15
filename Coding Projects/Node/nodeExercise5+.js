const fs = require('fs');
const http = require('http');

let inputStandard = process.openStdin();

let fileName = "";
let inputText = "";

console.log("Write a filename")

inputStandard.addListener('data', inputLine => {
  if (fileName == "") {
    fileName = "./" + inputLine.toString().trim();
    console.log("Write a text");
    if (fileName == ""){
      console.error("Try again")
    }
  }
  else if (fileName.length > 1) {
    inputText = inputLine.toString().trim();
    fs.writeFile(fileName, inputText, () =>{
      console.log("Wrote " + inputText + " into " + fileName);
      fileName = "";
      inputText = "";
      console.log("Write a filename")
    })
  }
})
