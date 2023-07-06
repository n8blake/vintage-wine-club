const mongoose = require('mongoose');
var crypto = require('crypto');
const db = require('../models/index');
const User = require('../models/User');
const Wine = require('../models/Wine');
const WineNoteCategory = require('../models/WineNoteCategory');
const WineNote = require('../models/WineNote');


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1/vintage"
)

const WINE_NOTE_CATEGORIES = [
  {
    _id:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c6'),
    category: 'Fruit',
    description: "Fruitiness is a fundamental element found in many wines, adding an array of vibrant flavors and aromas to the overall tasting experience. When describing a fruity wine, one can expect a delightful medley of ripe, juicy, and sometimes exotic fruit characteristics. The primary fruit notes can span from familiar varieties like apples, pears, and citrus fruits to more tropical and exotic options like pineapple, mango, and passionfruit. These fruit flavors bring a sense of freshness and liveliness to the wine, enhancing its overall appeal. Additionally, the intensity and ripeness of the fruit can vary, ranging from subtle hints to pronounced and expressive qualities, depending on the wine's style and grape varietal. Whether it's a crisp Sauvignon Blanc with notes of zesty grapefruit and gooseberry, a luscious Chardonnay with hints of ripe pear and golden apple, or a juicy red wine bursting with flavors of blackberries and cherries, the fruity element in a wine adds a layer of richness and complexity that can be thoroughly enjoyed and appreciated."
  },
  {
    _id:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c7'),
    category: 'Earth',
    description: "Earthy flavors and aromas in wine provide a captivating and distinct character that is often sought after by wine enthusiasts. The earthiness base element adds depth and complexity to the overall tasting experience. It is reminiscent of the scents and tastes associated with the soil, forest floor, or various natural elements.\n In wines, earthy notes can manifest in different ways, ranging from subtle nuances to more pronounced characteristics. These can include aromas of damp earth, mushrooms, truffles, or even a hint of loamy soil. The flavors can evoke sensations of minerals, slate, or a sense of terroir, reflecting the unique qualities of the vineyard where the grapes were grown.\n Earthy elements can be found in both red and white wines, but they are often more prominent in certain varietals. For example, in red wines, Pinot Noir is known for its earthy profile, with notes of forest floor and damp leaves. Similarly, in white wines, Chardonnay from Burgundy can exhibit earthy qualities, showcasing hints of wet stones or flint.\n When well-integrated, earthy notes can add complexity and balance to a wine, complementing the fruit flavors and contributing to its overall character. It is worth noting that earthiness is subjective and can vary depending on the wine's origin, winemaking techniques, and aging process.\n Overall, the presence of earthiness as a tasting note base element in wine provides an intriguing and captivating dimension, inviting exploration and appreciation of the wine's connection to the natural world."
  },
  {
    _id:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c8'),
    category: 'Herbal',
    description: "Vegetable or herbal tasting notes in wine provide a distinctive and intriguing element that adds complexity to the overall tasting experience. These notes are reminiscent of various fresh vegetables, herbs, or botanicals that can be detected in the wine's aroma and flavor profile.\n In terms of vegetables, tasting notes might include hints of bell peppers, green beans, asparagus, or even tomatoes. These flavors can range from subtle, adding a touch of freshness and vibrancy, to more pronounced, providing a distinct herbaceous quality.\n Herbal notes in wine can encompass a wide range of flavors, including but not limited to basil, mint, thyme, rosemary, or sage. These herbal characteristics can add a layer of complexity and depth to the wine, providing a unique aromatic and flavor component.\n The presence of vegetable or herbal tasting notes can be found in both red and white wines, and their intensity and prominence may vary depending on factors such as grape variety, climate, winemaking techniques, and aging process.\n When well-integrated, these tasting notes can contribute to the overall balance and flavor profile of the wine, complementing other elements such as fruitiness, acidity, or oak influences. It is important to note that vegetable and herbal notes are subjective and can be perceived differently by individuals, depending on their sensitivity and personal preferences."
  },
  {
    _id:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c9'),
    category: 'Wood',
    description: "Woodiness is a fundamental tasting note in wine that arises from the influence of oak during the winemaking process. It refers to the flavors and aromas derived from the contact between the wine and oak barrels or oak alternatives, such as oak chips or staves.\n When a wine exhibits woodiness, it often showcases characteristics such as vanilla, caramel, baking spices (like cinnamon or clove), toast, or a distinct smokiness. These flavors and aromas are imparted by the compounds present in the oak, such as vanillin, lignin, and tannins, which interact with the wine over time.\n The intensity of woodiness can vary depending on factors like the type of oak used (e.g., French oak, American oak), the level of toast on the barrels, the duration of contact between wine and oak, and the age of the barrels.\n Woodiness is commonly associated with oak-aged red wines, particularly full-bodied varietals like Cabernet Sauvignon or Syrah, but it can also be present in certain white wines and other grape varieties. In white wines, oak can contribute flavors like butterscotch, coconut, or a creamy texture.\n When integrated harmoniously, woodiness can enhance a wine's complexity, add depth, and provide structure. However, excessive oak influence can overpower the fruit flavors and disrupt the overall balance of the wine.\n It's important to note that woodiness is a subjective perception, and preferences for oak influence can vary among individuals. Some wine enthusiasts appreciate a subtle hint of oak, while others prefer more pronounced wood characteristics.\n Overall, woodiness as a tasting note in wine adds another layer of complexity and can contribute to the overall character and aging potential of the wine."
  },
  {
    _id:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4ca'),
    category: 'Floral',
    description: "Floral is a fundamental wine tasting note that refers to the presence of floral aromas and flavors in a wine. These characteristics are reminiscent of the scents and tastes associated with various flowers and blossoms.\n When a wine exhibits floral notes, it can evoke a wide range of floral profiles, including but not limited to jasmine, rose petals, violet, lavender, orange blossom, or elderflower. These delicate and fragrant aromas can provide an alluring and aromatic quality to the wine.\n Floral tasting notes are commonly found in white wines, particularly aromatic varietals like Gewürztraminer, Riesling, Muscat, or Viognier. However, they can also be present in certain red wines, such as some expressions of Pinot Noir or Syrah, where they add a nuanced layer of complexity.\n The intensity and type of floral notes can vary depending on factors such as grape variety, climate, and winemaking techniques. Some wines may showcase subtle hints of flowers, while others may have more pronounced and vibrant floral characteristics. \n When well-integrated, floral notes can contribute to the overall aromatic profile of the wine, enhancing its complexity and inviting a sensory journey. They can add elegance, freshness, and a sense of refinement to the wine's bouquet.\n It's worth noting that floral tasting notes are subjective, and individuals may perceive different types of flowers or varying intensities based on their personal sensitivity and experiences.\n In summary, floral as a tasting note in wine brings forth the enchanting and aromatic qualities associated with flowers. It enhances the sensory experience, adds complexity, and contributes to the overall appeal of the wine."
  }
]

const WINE_NOTES = [
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c6'),
    label: 'Black Currant',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c6'),
    label: 'Cherry',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c6'),
    label: 'Pear',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c6'),
    label: 'Apple',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c7'),
    label: 'Crushed Rock',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c7'),
    label: 'Slate',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c7'),
    label: 'Mushroom',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c7'),
    label: 'Smoke',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c8'),
    label: 'Fennel',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c8'),
    label: 'Oregano',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c8'),
    label: 'Bell Pepper',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c8'),
    label: 'Green Bean',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c9'),
    label: 'Oak',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c9'),
    label: 'Cedar',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c9'),
    label: 'Cola',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4c9'),
    label: 'Vanilla',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4ca'),
    label: 'Violet',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4ca'),
    label: 'Rose',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4ca'),
    label: 'Lemon Blossom',
  },
  {
    category:  mongoose.Types.ObjectId('64a5ebd4cbec57f8d3b1a4ca'),
    label: 'Lavendar',
  },
]

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
      }]
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
    ]},
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
    },
    {
      name: 'Chenin Blanc',
      description:'This is a deep and salty white wine. It has soft acidity and a slight weight on the palate. It\'s a great wine for a white meats like turkey or roasted chicken.',
      vintage:2020,
      type:'white',
      color: 'white',
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

const seedWineNoteCategories = async function(){
  return WineNoteCategory
      .deleteMany({})
      .then(() => WineNoteCategory.collection.insertMany(WINE_NOTE_CATEGORIES))
      .then(data => {
          if(data.insertedCount) {
              console.log(data.insertedCount + " category records insterted!");
          } else {
              console.log(data)
          }
      })
      .catch(error => {
          console.error(error);
          process.exit(1);
      });
}

const seedWineNotes = async function(){
  return WineNote
      .deleteMany({})
      .then(() => WineNote.collection.insertMany(WINE_NOTES))
      .then(data => {
          if(data.insertedCount) {
              console.log(data.insertedCount + " note records insterted!");
          } else {
              console.log(data)
          }
      })
      .catch(error => {
          console.error(error);
          process.exit(1);
      });
}

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
  console.log("Hello from seeding script.");  
  await seedWineNoteCategories();
  await seedWineNotes();
  await seedWines();
    //await seedUsers();
}

seedDB().then(() => {
    console.log("Database seeing complete.")
    process.exit(0);
}).catch(error => {
    console.error(error);
    process.exit(1);
});