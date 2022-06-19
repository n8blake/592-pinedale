import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from 'src/app/drinks/drink.service';
import { Drink, Drinks } from 'src/app/drinks/drinks.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  public drinks?: Drink[]
  public drinkType!: Drinks

  constructor(private drinkService: DrinkService, private router: Router) {
    
  }

  ngOnInit(): void {
    
    let url = this.router.url
    switch (url) {
      case '/wine':
        this.drinkType = Drinks.WINES
        break
      case '/cocktails':
          this.drinkType = Drinks.COCKTAILS
        break
      case '/beer':
        this.drinkType = Drinks.BEERS
        break
      case '/whiskey':
        this.drinkType = Drinks.WHISKIES
          break
      default :
        this.drinkType = Drinks.COCKTAILS
    }
    this.drinkService.getDrinks(this.drinkType).subscribe((drinks: Drink[] | undefined): void => {
      this.drinks = drinks
    })
  }

  trackById(index: number, drink: Drink): string { 
    if(drink._id){
      return drink._id
    } else {
      return ""
    }
   }

}
