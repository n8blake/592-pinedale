import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from '../../drink.service';
import { Drinks, Whiskey } from '../../drinks.model';

@Component({
  selector: 'app-add-whiskey-form',
  templateUrl: './add-whiskey-form.component.html',
  styleUrls: ['./add-whiskey-form.component.scss']
})
export class AddWhiskeyFormComponent implements OnInit {

  whiskey: Whiskey

  constructor(private drinkService: DrinkService, private router: Router) { 
    this.whiskey = {kind:"Whiskey", name: ""}
  }

  ngOnInit(): void {
  }

  submitWhiskey(): void {
    this.drinkService.addDrink(Drinks.WHISKIES, this.whiskey).subscribe(result => {
      //console.log(result)
      this.router.navigate(['/whiskey'])
    })
  }

  cancel(): void {
    this.whiskey = {kind: "Whiskey", name:""}
    this.router.navigate(['/whiskey'])
  }
}
