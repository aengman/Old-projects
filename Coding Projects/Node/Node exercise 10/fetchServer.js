const fs = require('fs');
const http = require('http');

let server = http.createServer()

server.on('request', (request, response) => {
  let readHtml = null;
  let writeHtml = null;
  let targetFile = "./initial.html";
  let recieved = '';
  let fetchTarget = 'http://forverkliga.se/JavaScript/api/simple.php?world';
  let oldFile = '';
  let newFile = '';
  response.writeHeader(200, {"Content-Type": "text/html"});
  readHtml = fs.createReadStream(targetFile);
  readHtml.on('data', chunk => {
    oldFile += chunk;
  })
  http.get(fetchTarget, (getResponse) => {
    getResponse.on('data', (chunk) => {
      recieved += chunk;
    })
    getResponse.on('end', () => {
      writeHtml = fs.createWriteStream(targetFile);
      newFile = oldFile.replace(/<api-data\/>/, recieved)
      writeHtml.write(newFile);
    })
  })
  readHtml.pipe(response);
})
server.listen('3000');
