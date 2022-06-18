import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../drink.service';
import { Cocktial, Drinks } from '../../drinks.model';

@Component({
  selector: 'app-add-cocktail-form',
  templateUrl: './add-cocktail-form.component.html',
  styleUrls: ['./add-cocktail-form.component.scss']
})
export class AddCocktailFormComponent implements OnInit {

  cocktail!: Cocktial
  cocktailComponents: string = ""

  constructor(private drinkService: DrinkService) {
    this.cocktail = {id: 0, name: ""}
  }

  ngOnInit(): void {
  }

  updateCocktailComponents(): void {
    let components = this.cocktailComponents.split(',')
    this.cocktail.components = components.flatMap(comp => comp.toLocaleLowerCase().trim())
  }

  submitCockail() {
    console.log('submitting')
    this.drinkService.addDrink(Drinks.COCKTAILS, this.cocktail)
  }

}
