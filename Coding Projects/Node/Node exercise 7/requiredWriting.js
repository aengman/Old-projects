const fs = require('fs');

module.exports = {
  writer: function(file, content){
    let fsWriter = fs.createWriteStream(file, {flags: "a"});
    fsWriter.write(content);
    console.log("Write more content");
  },
  file: "",
  content: "",
}
