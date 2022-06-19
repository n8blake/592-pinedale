import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve, Router} from '@angular/router';
import { DrinkService } from './drink.service';
import { Drinks } from './drinks.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkListResolverService implements Resolve<unknown> {

  type!: Drinks

  constructor(private drinkService: DrinkService, private router:Router, private activatedRoute: ActivatedRoute) { }

  resolve(){
    let url = this.router.url
    //console.log(url)
    switch (url) {
      case '/wine':
        this.type = Drinks.WINES
        break
      case '/cocktails':
          this.type = Drinks.COCKTAILS
        break
      case '/beer':
        this.type = Drinks.BEERS
        break
      case '/whiskey':
        this.type = Drinks.WHISKIES
          break
      default :
        this.type = Drinks.COCKTAILS
  }
    const resolution = this.drinkService.getDrinks(this.type)
    return resolution
  }

}
