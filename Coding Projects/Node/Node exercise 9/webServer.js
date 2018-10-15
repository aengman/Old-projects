const fs = require('fs');
const http = require('http');
let server = http.createServer();
const { Transform } = require ('stream');

server.on('request', (request, response) => {
  let src = null;
  if (request.url !== "/" && request.url !== "/upper"){
    src = fs.createReadStream('./error.html')
  }
  else {
    src = fs.createReadStream('./initialT.html');
  }
  response.writeHeader(200, {"Content-Type": "text/html"});
  if (request.url == "/upper"){
    const upperStream = new Transform ({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback();
      }
    })
    src.pipe(upperStream).pipe(response)
  }
  else {
    src.pipe(response)
  }
});
server.listen(3000);
