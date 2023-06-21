const mongoose = require('mongoose');
var crypto = require('crypto');
const db = require('../models/index');
const User = require('../models/User');
const Wine = require('../models/Wine');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/vintage"
)

const WINES = [
    {
      name: 'Cabernet Franc',
      description:'A true expression of this grape in California. Smells like peppers and cooking herbs (think: tarragon or rosemary). The palate has a pleasant medium weight, with meaty, chewy fruit. This is a great American Cab Franc. Roast up some chicken, stuff it with goat cheese, and sip this peppery awesomeness.',
      vintage:2017,
      type:'red',
      color: 'red',
      origin:{
        country: 'USA',
        region:'Napa Valley'},
      composition:[{
        percentage: 1,
        grape: 'Cabernet Franc'
      }],
      image: {
        original: '/assets/wine/wine-1.png'
    }
    },
    {
      name: 'Côtes du Rhône',
      description:'The blend is typical of Côtes du Rhône, and its high proportion of Grenache makes the wine suitable for drinking on the younger side. This 2017 Côtes du Rhône is at once fresh and mature, with ripe dark fruit notes of blackberry and cassis punctuated by earthy minerality, roasted meat, and chocolate.',
      vintage:2017,
      type:'red',
      color: 'red',
      origin: {
        country: 'France',
        region: 'Rhône'
      },
      composition:[
        {
          percentage: .72,
          grape: 'Grenache'
        },
        {
          percentage: .08,
          grape: 'Cinsault'
        },
        {
          percentage: .2,
          grape: 'Mourvèdre'
        },
    ],
      image: {
        original: '/assets/wine/wine-2.png'}
    },
    {
      name: 'Cabernet Sauvingon',
      description:'Aromas of red fruits are followed by concentrated dark berry tastes, especially blackberry and cassis, accented by notes of baking spices and cedar. With its fine tannins and well-integrated oak — aging was mostly in previously used French barrels — it would pair wonderfully with filet mignon, leg of lamb, and other festive dishes.',
      vintage:2018,
      type:'red',
      color: 'red',
      origin: {
        country: 'USA',
        state: 'California',
        region: 'Lodi'
    },
      composition:[
        {
          percentage: .8,
          grape: 'Cabernet Sauvignon'
        },
        {
          percentage: .1,
          grape: 'Cabernet Franc'
        },
        {
          percentage: .1,
          grape: 'Mourvèdre'
        },
    ],
      image:{
        original: '/assets/wine/wine-3.png'}
    },
    {
      name: 'Chenin Blanc',
      description:'This is a deep and salty white wine. It has soft acidity and a slight weight on the palate. It\'s a great wine for a white meats like turkey or roasted chicken.',
      vintage:2020,
      type:'white',
      color: 'white',
      imageUrl: '/assets/wine/wine-4.png'
    },
    {
      name: 'Chianti Classico',
      description:'Nice, vibrant red wine. The acidity is active and the depth subtle depth anchors the core of fruit. Classic smells of cherries and cranberries are combined with a whiff of worn leather. This is a great wine to have lying around for a pasta night.',
      vintage:2018,
      type:'red',
      color: 'red',
      origin: {
        country: 'Italy',
        region: 'Chianti'},
      composition:[{
        percentage: 1,
        grape: 'Sangiovese'
      }],
      image: { original: '/assets/wine/wine-5.png' }
    },
    {
      name: 'Rosé de Pinot Noir',
      description:'Soft, supple, round, and creamy; this wine smells like peaches and cream. It has a nice, heady mouthfeel with good acidity that cuts through the pink depth.',
      vintage:2021,
      type:'rose',
      color: 'rose',
      origin: {
        country: 'France'
      },
      composition:[{
        percentage: 1,
        grape: 'Pinot Noir'
      }],
      image:{ original: '/assets/wine/wine-6.png'} 
    },
]

const USERS = [
  { username: "joe",
    firstName: "Joe",
    lastName: "Schmoe",
    password: "joe1234",
    email: "joe@joe.com"
  }
]

const seedWines = async function(){
    return Wine
        .deleteMany({})
        .then(() => Wine.collection.insertMany(WINES))
        .then(data => {
            if(data.insertedCount) {
                console.log(data.insertedCount + " wine records insterted!");
            } else {
                console.log(data)
            }
        })
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}

const salt = crypto.randomBytes(16).toString('hex');
function hashPassword(password) {
  return new Promise((resolve, reject) => {
      const iterations = 50000;
      const keylen = 32;
      const digest = 'sha256';
      
      crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
          if (err) {
              reject(err);
          } else {
              resolve(key.toString('hex'));
          }
      })
  });
}

const seedUsers = async function(){
  let hashedPassword = await hashPassword('joe1234')
  let user = { 
    username: "joe",
    firstName: "Joe",
    lastName: "Schmoe",
    salt: salt,
    hashedPassword: hashedPassword,
    email: "joe@joe.com"
  }
  return User
    .deleteMany({})
    .then(() => {
      return User.collection.insertMany([user])
        .then(data => {
          if(data && data.insertedCount){
            console.log(data.insertedCount + " user records inserted.")
          } else {
            console.log(data)
          }
        })
        .catch(error => {
          console.error(error);
          process.exit(1);
        })
      })
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}




const seedDB = async function(){
    await seedWines();
    await seedUsers();
}

seedDB().then(() => {
    console.log("Database seeing complete.")
    process.exit(0);
}).catch(error => {
    console.error(error);
    process.exit(1);
});