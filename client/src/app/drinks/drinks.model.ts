export interface Drink {
    id: number, 
    name: string,
    description?: string,
    imageUrl?: string,
    abv?: number
}

export interface Wine extends Drink {
    id: number,
    name: string,
    description?: string,
    vintage?: number,
    type?: string,
    color?: string,
    country?: string,
    region?: string,
    composition?: Array<WineComposition>,
    tastingNotes?: Array<string>,
    pickedBy?: Array<string>,
    imageUrl?: string
}

export interface WineComposition {
    grape: string,
    percentage: number
}

export interface Beer extends Drink {
    id: number,
    name: string,
    brewery?: string,
    country?: string,
    type?: string
}

export interface Cocktial extends Drink {
    id: number,
    name: string,
    components?: Array<string>
}

export interface Whiskey extends Drink {
    id: number,
    name: string,
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