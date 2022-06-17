export interface Drink {
    id: number, 
    name: string,
    description?: string
}

export interface Wine extends Drink {
    id: number,
    name: string,
    description?: string,
    vintage?: number,
    type?: string,
    color?: string,
    composition?: Array<any>,
    tastingNotes?: Array<string>,
    pickedBy?: Array<string>,
    imageUrl?: string
}

export interface Beer extends Drink {
    id: number,
    name: string
}

export interface Cocktial extends Drink {
    id: number,
    name: string
}

export interface Whiskey extends Drink {
    id: number,
    name: string
}

export enum Drinks {
    WINES = 'WINES',
    BEERS = 'BEERS',
    COCKTAILS = 'COCKTAILS',
    WHISKIES = 'WHISKIES'
}