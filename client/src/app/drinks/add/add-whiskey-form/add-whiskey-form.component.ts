import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../drink.service';
import { Drinks, Whiskey } from '../../drinks.model';

@Component({
  selector: 'app-add-whiskey-form',
  templateUrl: './add-whiskey-form.component.html',
  styleUrls: ['./add-whiskey-form.component.scss']
})
export class AddWhiskeyFormComponent implements OnInit {

  whiskey: Whiskey

  constructor(private drinkService: DrinkService) { 
    this.whiskey = {id: 0, name: ""}
  }

  ngOnInit(): void {
  }

  submitWhiskey(): void {
    this.drinkService.addDrink(Drinks.WHISKIES, this.whiskey)
  }

}
