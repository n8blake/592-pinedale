import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private drinkService: DrinkService, private router: Router) {
    this.cocktail = { kind:"Cocktail", name: ""}
  }

  ngOnInit(): void {
  }

  updateCocktailComponents(): void {
    let components = this.cocktailComponents.split(',')
    this.cocktail.components = components.flatMap(comp => comp.toLocaleLowerCase().trim())
  }

  submitCockail() {
    this.drinkService.addDrink(Drinks.COCKTAILS, this.cocktail).subscribe(result => {
      //console.log(result)
      this.router.navigate(['/cocktails'])
    })
  }

  cancel(): void {
    this.cocktail = {kind: "Cocktail", name:""}
    this.router.navigate(['/cocktails'])
  }

}
