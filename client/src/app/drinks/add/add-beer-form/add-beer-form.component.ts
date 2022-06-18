import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../drink.service';
import { Beer, Drinks } from '../../drinks.model';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {

  beer: Beer

  constructor(private drinkService: DrinkService) {
    this.beer = {id: 0, name: ""}
  }

  ngOnInit(): void {
  }

  submitBeer(): void {
    this.drinkService.addDrink(Drinks.BEERS, this.beer)
  }

}
