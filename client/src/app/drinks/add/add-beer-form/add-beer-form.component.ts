import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from '../../drink.service';
import { Beer, Drinks } from '../../drinks.model';

@Component({
  selector: 'app-add-beer-form',
  templateUrl: './add-beer-form.component.html',
  styleUrls: ['./add-beer-form.component.scss']
})
export class AddBeerFormComponent implements OnInit {

  beer: Beer

  constructor(private drinkService: DrinkService, private router: Router) {
    this.beer = {kind:"Beer", name: ""}
  }

  ngOnInit(): void {
  }

  submitBeer(): void {
    console.log(this.beer)
    this.drinkService.addDrink(Drinks.BEERS, this.beer).subscribe(result => {
      //console.log(result)
      this.router.navigate(['/beer'])
    })
  }

  cancel(): void {
    this.beer = {kind: "Beer", name:""}
    this.router.navigate(['/beer'])
  }

}
