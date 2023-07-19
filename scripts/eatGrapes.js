const csv = require("csv-parser");
const fs = require("fs");
const results = [];

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/vintage");
const GrapeVarietal = require('../models/GrapeVarietal');

try {
fs.createReadStream("../data/grape_varietals.csv")
  .pipe(csv())
  .on("data", (data) => {
    const otherAltNames = [];
    if(data.name && data.name.indexOf('/') > -1){
        const names = data.name.split('/');
        names.map(name => {
            if(names.indexOf(name) > 0){
                otherAltNames.push(name);
            }
        })
        data.name = names[0].trim();
    }
    if(data.synonyms){
        data.synonyms = String(data.synonyms).split(',');
        data.synonyms = data.synonyms.flatMap(s =>{ 
            if(s.indexOf(' and ' > -1)){
                let lastElements = s.split(' and ');
                if (lastElements[lastElements.length - 1].indexOf(".") > -1) {
                  lastElements[lastElements.length - 1].replace(".", "");
                }
                lastElements = lastElements.flatMap((e) => e.trim());
                return lastElements;
            } else {
                return s.trim();
            }
        })
        data.synonyms = data.synonyms.filter(function (entry) {
          return entry.trim() != "";
        });
        data.synonyms = data.synonyms.flatMap(s => s.replace('.', ""))
        data.synonyms = data.synonyms.flatMap(s => s.trim())
    }
    if(otherAltNames.length > 0){
        data.synonyms = data.synonyms.concat(otherAltNames);
    }
    //console.log(`Adding: ${data.name} with ${data.synonyms.length} alternative names`)
    results.push(data)
   })
  .on("end", () => {
    console.log(`Preparing to insert ${results.length} records.`);
    seedGrapes(results)
      .then(() => {
        console.log("Database seeing complete.");
        process.exit(0);
      })
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  });
} catch(error){
    console.log(error);
    process.exit(1);
}

const seedGrapes = async function(grapes){
    return GrapeVarietal
            .deleteMany({})
            .then(() => GrapeVarietal.collection.insertMany(grapes))
            .then(data => {
                if(data.insertedCount) {
                    console.log(`${data.insertedCount} grape varieties inserted!`)
                } else {
                    console.log(data);
                }
            })
            .catch(error => {
                console.log(error);
                process.exit(1);
            })
}

 
