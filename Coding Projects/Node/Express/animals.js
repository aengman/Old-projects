 let animals = {
   cat: {
     initial: "cat",
     name: "Cute devil",
     special: "Evil incarnate",
     type: "Feline",
   },
   chimera: {
     initial: "chimera",
     name: "Multidon Creatalis",
     special: "Fused beast",
     type: "Everything",
   },
   dragon: {
     initial: "dragon",
     name: "Draco Origin",
     special: "Breathes fire",
     type: "Draconic",
   },
   kitsune: {
     initial: "kitsune",
     name: "Kawaii Manga",
     special: "Fox fire",
     type: "Canine",
   },
   mermaid: {
     initial: "mermaid",
     name: "Waterius Humid",
     special: "Humanoid water hybrid",
     type: "Aquatic",
   },
   youkai: {
     initial: "youkai",
     name: "Demin Japanus",
     special: "Varies",
     type: "Mythical",
   },
   centipede: {
     initial: "centipede",
     name: "Leggus Legleg",
     special: "Too many legs",
     type: "Leg",
   },
 }

let getAnimals = function (searchLocation, target) {
    target.send(searchLocation)
  }

 module.exports = {
   getAnimals: getAnimals,
   animal: animals,
 }
