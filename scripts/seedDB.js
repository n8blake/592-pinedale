const mongoose = require("mongoose");
const db = require("../models/drink");
const Wine = db.Wine;
const Cocktail = db.Cocktail;
const Beer = db.Beer;
const Whiskey = db.Whiskey;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pinedale"
);

const WINES = [
    {
      name: 'Cabernet Franc',
      kind: 'Wine',
      description:'A true expression of this grape in California. Smells like peppers and cooking herbs (think: tarragon or rosemary). The palate has a pleasant medium weight, with meaty, chewy fruit. This is a great American Cab Franc. Roast up some chicken, stuff it with goat cheese, and sip this peppery awesomeness.',
      vintage:2017,
      type:'red',
      color: 'red',
      country: 'USA',
      region:'Napa Valley',
      composition:[{
        percentage: 1,
        grape: 'Cabernet Franc'
      }],
      tastingNotes:['plum', 'herbs', 'red pepper'],
      pickedBy:['Seth'],
      imageUrl: '/assets/wine/wine-1.png'
    },
    {
      name: 'Côtes du Rhône',
      kind: 'Wine',
      description:'The blend is typical of Côtes du Rhône, and its high proportion of Grenache makes the wine suitable for drinking on the younger side. This 2017 Côtes du Rhône is at once fresh and mature, with ripe dark fruit notes of blackberry and cassis punctuated by earthy minerality, roasted meat, and chocolate.',
      vintage:2017,
      type:'red',
      color: 'red',
      country: 'France',
      region: 'Rhône',
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
      tastingNotes:['smoke', 'earth', 'blackberry', 'cassis', 'chocolate'],
      pickedBy:['Nate'],
      imageUrl: '/assets/wine/wine-2.png'
    },
    {
      name: 'Cabernet Sauvingon',
      kind: 'Wine',
      description:'Aromas of red fruits are followed by concentrated dark berry tastes, especially blackberry and cassis, accented by notes of baking spices and cedar. With its fine tannins and well-integrated oak — aging was mostly in previously used French barrels — it would pair wonderfully with filet mignon, leg of lamb, and other festive dishes.',
      vintage:2018,
      type:'red',
      color: 'red',
      region: 'Lodi',
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
      tastingNotes:['blackberry', 'cassis', 'baking spices', 'cedar'],
      pickedBy:['Seth', 'Cam'],
      imageUrl: '/assets/wine/wine-3.png'
    },
    {
      name: 'Chenin Blanc',
      kind: 'Wine',
      description:'This is a deep and salty white wine. It has soft acidity and a slight weight on the palate. It\'s a great wine for a white meats like turkey or roasted chicken.',
      vintage:2020,
      type:'white',
      color: 'white',
      tastingNotes:['grass', 'lemon', 'citrus', 'cream'],
      pickedBy:['Cam'],
      imageUrl: '/assets/wine/wine-4.png'
    },
    {
      name: 'Chianti Classico',
      kind: 'Wine',
      description:'Nice, vibrant red wine. The acidity is active and the depth subtle depth anchors the core of fruit. Classic smells of cherries and cranberries are combined with a whiff of worn leather. This is a great wine to have lying around for a pasta night.',
      vintage:2018,
      type:'red',
      color: 'red',
      country: 'Italy',
      region: 'Chianti',
      composition:[{
        percentage: 1,
        grape: 'Sangiovese'
      }],
      tastingNotes:['cranberry', 'leather', 'cherry'],
      pickedBy:['Seth', 'Nate'],
      imageUrl: '/assets/wine/wine-5.png'
    },
    {
      name: 'Rosé de Pinot Noir',
      kind: 'Wine',
      description:'Soft, supple, round, and creamy; this wine smells like peaches and cream. It has a nice, heady mouthfeel with good acidity that cuts through the pink depth.',
      vintage:2021,
      type:'rose',
      color: 'rose',
      country: 'France',
      composition:[{
        percentage: 1,
        grape: 'Pinot Noir'
      }],
      tastingNotes:['cream', 'peach', 'vanilla'],
      pickedBy:['Chris', 'Cam'],
      imageUrl: '/assets/wine/wine-6.png'
    },
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
const COCKTAILS = [
    {
        name: "Mint Julep",
        kind: "Cocktail",
        components: [
        "bourbon",
        "mint",
        "bitters"
        ]
    }, 
    {
        name: "Gin & Tonic",
        kind: "Cocktail",
        components: [
        "gin",
        "tonic water",
        "lime"
        ]
    }, 
    {
        name: "Moscow Mule",
        kind: "Cocktail",
        components: [
        "Vodka",
        "ginger beer",
        "lime"
        ]
    }
]
const seedCocktails = async function(){
    return Cocktail
        .deleteMany({})
        .then(() => Cocktail.collection.insertMany(COCKTAILS))
        .then(data => {
            if(data.insertedCount) {
                console.log(data.insertedCount + " cocktail records insterted!");
            } else {
                console.log(data)
            }
        })
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}
const BEERS = [
    {
        name: "Blue Moon",
        kind: "Beer"
    },
    {
        name: "Baltimore Blonde",
        kind: "Beer",
        brewery: "Guiness",
        country: "USA",
        type: "Blonde Ale"
    },
    {
        name: "Truly Margarita",
        kind: "Beer",
        brewery: "Sam Adams",
        country: "USA",
        type: "Seltzer",
        abv: 0.053
    }
]
const seedBeer = async function(){
    return Beer
        .deleteMany({})
        .then(() => Beer.collection.insertMany(BEERS))
        .then(data => {
            if(data.insertedCount) {
                console.log(data.insertedCount + " beer records insterted!");
            } else {
                console.log(data)
            }
        })
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}
const WHISKIES = [
    {
        name: "Dewars 12",
        kind: "Whiskey",
        type: "Scotch",
        age: 12,
        country: "Scotland",
        description: "A perfectly balanced marriage of carefully selected 12 year old malt and grain Scotch whiskies, created by Dewar's Master Blender. Marrying these superb whiskies adds a smoothness that your taste will at once discern. Rich, well rounded finish, with just a hint of oak."
    }
]
const seedWhiskies = async function(){
    return Whiskey
        .deleteMany({})
        .then(() => Whiskey.collection.insertMany(WHISKIES))
        .then(data => {
            if(data.insertedCount) {
                console.log(data.insertedCount + " whiskey records insterted!");
            } else {
                console.log(data)
            }
        })
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}

const seedDB = async function(){
    await seedWines();
    await seedCocktails();
    await seedBeer();
    await seedWhiskies();
}

seedDB().then(() => {
    console.log("Database seeing complete.")
    process.exit(0);
}).catch(error => {
            console.error(error);
            process.exit(1);
        });