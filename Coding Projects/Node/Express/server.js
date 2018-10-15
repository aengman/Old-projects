const express = require('express');
const fs = require('fs');
let animalFetcher = require('./animals.js');
let URLcounter = require('./public/countMessages.txt');

const animalApp = express();

let log = (request, response, next) => {
  let writer = fs.createWriteStream('./public/allAccess.txt', {flags: "a"});
  writer.write(request.url + " " + request.method + " at " + new Date().toLocaleString() + "\n");
  next();
}
let count = (request, response, next) => {
  let writeCount = fs.createWriteStream('./public/countMessages.txt', {flags: "a"});
  writeCount.write("0");
  next();
}
let consoleURL = (request, response, next) => {
  console.log(request.url);
}
let consoleMethod = (request, response, next) => {
  console.log(request.method);
}
let errorHandler = (error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send("The world incinerated!")
}

animalApp.use(express.static(__dirname + '/public'));
animalApp.use(log);
animalApp.use(count);
animalApp.use('/info', function (req, res, next) {
  consoleURL(req, res, next);
  consoleMethod(req, res, next);
  next();
})

animalApp.get('/api/', (request, response) => {
  animalFetcher.getAnimals(animalFetcher.animal, response);
})
animalApp.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

animalApp.get('/info', (request, response) => {
  //consoleURL();
  //consoleMethod();
  response.send(request.url + " " + request.method);
});

animalApp.get('/countMessages', (request, response) => {
  let counter = 0;
  let readCount = fs.createReadStream('./public/countMessages.txt');
  readCount.on('data', chunk => {
    counter += chunk.toString().length;
  })
  readCount.on('end', () => {
    response.send(`${counter}`);
  })
});

animalApp.get('/api/:animal', (request, response) => {
  let searchAnimal = request.params.animal;
  if (request.query.feature){
    let animalFeature = request.query.feature;
    animalFetcher.getAnimals(animalFetcher.animal[searchAnimal][animalFeature], response);
  }
  else {
    animalFetcher.getAnimals(animalFetcher.animal[searchAnimal], response);
  }
})

animalApp.use(errorHandler);
animalApp.listen(3000, () =>
  console.log("listening to animals")
)
