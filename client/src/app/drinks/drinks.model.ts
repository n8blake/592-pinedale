export interface Drink {
    _id?: string, 
    name: string,
    kind: string,
    description?: string,
    imageUrl?: string,
    abv?: number
}

export interface Wine extends Drink {
    vintage?: number,
    type?: string,
    color?: string,
    country?: string,
    region?: string,
    composition?: Array<WineComposition>,
    tastingNotes?: Array<string>,
    pickedBy?: Array<string>,
}

export interface WineComposition {
    grape: string,
    percentage: number
}

export interface Beer extends Drink {
    brewery?: string,
    country?: string,
    type?: string
}

export interface Cocktial extends Drink {
    components?: Array<string>
}

export interface Whiskey extends Drink {
    type?: string,
    country?: string,
    region?: string,
    age?: number
}

export enum Drinks {
    WINES = 'WINES',
    BEERS = 'BEERS',
    COCKTAILS = 'COCKTAILS',
    WHISKIES = 'WHISKIES'
}