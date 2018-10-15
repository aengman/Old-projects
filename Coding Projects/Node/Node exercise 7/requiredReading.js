const fs = require('fs');

module.exports = {
  reader: function(file){
    let fsReader = fs.createReadStream(file);
    fsReader.on('data', chunk => {
      console.log(chunk.toString().trim())
      console.log("Write a filename to read")
    })
  },
}
