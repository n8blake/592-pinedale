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

  public drinks?: Array<Drink>
  public drinkType!: Drinks

  constructor(private drinkService: DrinkService, private router: Router, private activatedRoute: ActivatedRoute) {   }

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
        this.drinks = []
    }
    this.drinks = this.drinkService.getDrinks(this.drinkType)
    
  }

  trackById(index: number, drink: Drink): number { return drink.id; }

}
