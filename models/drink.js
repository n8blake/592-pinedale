const mongoose = require('mongoose');
const Schema = mongoose.Schema
const extendSchema = require('mongoose-extend-schema')

const DrinkSchema = new Schema({
    name: { type: String, required: true },
    kind: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    abv: { type: Number }
})


const WineSchema = extendSchema(DrinkSchema, {
    vintage: {type: Number },
    type: {type: String},
    color: {type: String},
    country: {type: String},
    region: {type: String},
    composition: {type: Array},
    tastingNotes: {type: Array},
    pickedBy: {type: Array}
})

const BeerSchema = extendSchema(DrinkSchema, {
    brewery: { type: String },
    country: { type: String },
    type: { type: String }
})

const CocktailSchema = extendSchema(DrinkSchema, {
    components: { type: Array }
})

const WhiskeySchema = extendSchema(DrinkSchema, {
    type: { type: String },
    country: { type: String },
    region: { type: String },
    age: { type: Number }
})

const Drink = mongoose.model("Drink", DrinkSchema)
const Wine = mongoose.model("Wine", WineSchema)
const Cocktail = mongoose.model("Cocktail", CocktailSchema)
const Beer = mongoose.model("Beer", BeerSchema)
const Whiskey = mongoose.model("Whiskey", WhiskeySchema)

module.exports = {
    Drink,
    Wine,
    Beer,
    Whiskey,
    Cocktail
}