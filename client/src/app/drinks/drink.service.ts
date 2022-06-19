import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Drinks, Drink } from './drinks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  baseURL: string = ""

  constructor(private http: HttpClient) { 
    if(!environment.production){
      this.baseURL = environment.apiURL
    }
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} : ${error}`)
      return of(result as T)
    } 
  }

  getDrinks(type: Drinks): Observable<Drink[]> {
    
    switch(type){
      case Drinks.BEERS:
        return this.http.get<Drink[]>(this.baseURL + '/api/beer/').pipe(catchError(this.handleError<Drink[]>('getDrinks - beer', [])))
      case Drinks.COCKTAILS:
        return this.http.get<Drink[]>(this.baseURL + '/api/cocktails/').pipe(catchError(this.handleError<Drink[]>('getDrinks - cocktails', [])))
      case Drinks.WHISKIES:
        return this.http.get<Drink[]>(this.baseURL + '/api/whiskey/').pipe(catchError(this.handleError<Drink[]>('getDrinks - whiskey', [])))
      case Drinks.WINES:
        return this.http.get<Drink[]>(this.baseURL + '/api/wine/').pipe(catchError(this.handleError<Drink[]>('getDrinks - wine', [])))
      default:
        return this.http.get<Drink[]>(this.baseURL + '/api/drinks/').pipe(catchError(this.handleError<Drink[]>('getDrinks - default', [])))
    }
    
  }

  getDrink(_id: string): Drink {
    return {name: '', kind: 'none', description: 'No drink found.'}
  }

  addDrink(type: Drinks, drink: Drink) : Observable<Drink> {
    console.log(`${type} : ${drink.name}`);
    console.log(drink);
    const options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    switch(type){
      case Drinks.BEERS:
        return this.http.post<Drink>(this.baseURL + '/api/beer/', drink, options).pipe(catchError(this.handleError<Drink>('getDrinks - beer')))
      case Drinks.COCKTAILS:
        console.log('posting...')
        return this.http.post<Drink>(this.baseURL + '/api/cocktails/', drink, options).pipe(catchError(this.handleError<Drink>('getDrinks - cocktails')))
      case Drinks.WHISKIES:
        return this.http.post<Drink>(this.baseURL + '/api/whiskey/', drink, options).pipe(catchError(this.handleError<Drink>('getDrinks - whiskey')))
      case Drinks.WINES:
        return this.http.post<Drink>(this.baseURL + '/api/wine/', drink, options).pipe(catchError(this.handleError<Drink>('getDrinks - wine')))
      default:
        return this.http.post<Drink>(this.baseURL + '/api/drinks/', drink, options).pipe(catchError(this.handleError<Drink>('getDrinks - default')))
    }
  }

  
}

// const COCKTAILS: Cocktial[] = [
//   {
//     id: 10,
//     name: "Mint Julep",
//     kind: "Cocktail",
//     components: [
//       "bourbon",
//       "mint",
//       "bitters"
//     ]
//   }
// ]
// const BEERS: Beer[] = [
//   {
//     id: 11,
//     name: "Blue Moon",
//     kind: "Beer"
//   }
// ]
// const WHISKIES: Whiskey[] = [
//   {
//     id: 12,
//     name: "Dewars 12",
//     kind: "Whiskey",
//     type: "Scotch",
//     age: 12,
//     country: "Scotland",
//     description: "A perfectly balanced marriage of carefully selected 12 year old malt and grain Scotch whiskies, created by Dewar's Master Blender. Marrying these superb whiskies adds a smoothness that your taste will at once discern. Rich, well rounded finish, with just a hint of oak."
//   }
// ]
// const WINES: Wine[] = [
//   {
//     id: 1,
//     name: 'Cabernet Franc',
//     kind: 'Wine',
//     description:'A true expression of this grape in California. Smells like peppers and cooking herbs (think: tarragon or rosemary). The palate has a pleasant medium weight, with meaty, chewy fruit. This is a great American Cab Franc. Roast up some chicken, stuff it with goat cheese, and sip this peppery awesomeness.',
//     vintage:2017,
//     type:'red',
//     color: 'red',
//     country: 'USA',
//     region:'Napa Valley',
//     composition:[{
//       percentage: 1,
//       grape: 'Cabernet Franc'
//     }],
//     tastingNotes:['plum', 'herbs', 'red pepper'],
//     pickedBy:['Seth'],
//     imageUrl: '/assets/wine/wine-1.png'
//   },
//   {
//     id:2,
//     name: 'Côtes du Rhône',
//     kind: 'Wine',
//     description:'The blend is typical of Côtes du Rhône, and its high proportion of Grenache makes the wine suitable for drinking on the younger side. This 2017 Côtes du Rhône is at once fresh and mature, with ripe dark fruit notes of blackberry and cassis punctuated by earthy minerality, roasted meat, and chocolate.',
//     vintage:2017,
//     type:'red',
//     color: 'red',
//     country: 'France',
//     region: 'Rhône',
//     composition:[
//       {
//         percentage: .72,
//         grape: 'Grenache'
//       },
//       {
//         percentage: .08,
//         grape: 'Cinsault'
//       },
//       {
//         percentage: .2,
//         grape: 'Mourvèdre'
//       },
//   ],
//     tastingNotes:['smoke', 'earth', 'blackberry', 'cassis', 'chocolate'],
//     pickedBy:['Nate'],
//     imageUrl: '/assets/wine/wine-2.png'
//   },
//   {
//     id:3,
//     name: 'Cabernet Sauvingon',
//     kind: 'Wine',
//     description:'Aromas of red fruits are followed by concentrated dark berry tastes, especially blackberry and cassis, accented by notes of baking spices and cedar. With its fine tannins and well-integrated oak — aging was mostly in previously used French barrels — it would pair wonderfully with filet mignon, leg of lamb, and other festive dishes.',
//     vintage:2018,
//     type:'red',
//     color: 'red',
//     region: 'Lodi',
//     composition:[
//       {
//         percentage: .8,
//         grape: 'Cabernet Sauvignon'
//       },
//       {
//         percentage: .1,
//         grape: 'Cabernet Franc'
//       },
//       {
//         percentage: .1,
//         grape: 'Mourvèdre'
//       },
//   ],
//     tastingNotes:['blackberry', 'cassis', 'baking spices', 'cedar'],
//     pickedBy:['Seth', 'Cam'],
//     imageUrl: '/assets/wine/wine-3.png'
//   },
//   {
//     id:4,
//     name: 'Chenin Blanc',
//     kind: 'Wine',
//     description:'This is a deep and salty white wine. It has soft acidity and a slight weight on the palate. It\'s a great wine for a white meats like turkey or roasted chicken.',
//     vintage:2020,
//     type:'white',
//     color: 'white',
//     tastingNotes:['grass', 'lemon', 'citrus', 'cream'],
//     pickedBy:['Cam'],
//     imageUrl: '/assets/wine/wine-4.png'
//   },
//   {
//     id:5,
//     name: 'Chianti Classico',
//     kind: 'Wine',
//     description:'Nice, vibrant red wine. The acidity is active and the depth subtle depth anchors the core of fruit. Classic smells of cherries and cranberries are combined with a whiff of worn leather. This is a great wine to have lying around for a pasta night.',
//     vintage:2018,
//     type:'red',
//     color: 'red',
//     country: 'Italy',
//     region: 'Chianti',
//     composition:[{
//       percentage: 1,
//       grape: 'Sangiovese'
//     }],
//     tastingNotes:['cranberry', 'leather', 'cherry'],
//     pickedBy:['Seth', 'Nate'],
//     imageUrl: '/assets/wine/wine-5.png'
//   },
//   {
//     id:6,
//     name: 'Rosé de Pinot Noir',
//     kind: 'Wine',
//     description:'Soft, supple, round, and creamy; this wine smells like peaches and cream. It has a nice, heady mouthfeel with good acidity that cuts through the pink depth.',
//     vintage:2021,
//     type:'rose',
//     color: 'rose',
//     country: 'France',
//     composition:[{
//       percentage: 1,
//       grape: 'Pinot Noir'
//     }],
//     tastingNotes:['cream', 'peach', 'vanilla'],
//     pickedBy:['Chris', 'Cam'],
//     imageUrl: '/assets/wine/wine-6.png'
//   },
// ]

// const DRINKS = {
//   COCKTAILS,
//   BEERS, 
//   WHISKIES,
//   WINES
// }