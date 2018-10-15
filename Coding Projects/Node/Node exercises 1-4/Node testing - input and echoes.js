var fs = require('fs');

const http = require('http');
let demand = require('./requiredfile.js');
console.log(demand.stringExample);

let standardin = process.openStdin();
standardin.addListener('data', data => {
  console.log("first" + data.toString().toUpperCase());

  fs.writeFile("./testingtexting.txt", data.toString(), () => {
    console.log("Successfully saved " + data + " to file");
  });

  fs.readFile('./textingButAdding.txt', "utf8", (err, readData) => {
    let newText = readData + data.toString();
    console.log(newText);
    fs.writeFile("./textingButAdding.txt", newText, () => {
      console.log("Successfully added " + readData + " to file?")
    });
  });
})
