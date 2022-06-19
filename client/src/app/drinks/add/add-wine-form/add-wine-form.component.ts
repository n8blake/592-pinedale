import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from '../../drink.service';
import { Drinks, Wine } from '../../drinks.model';

@Component({
  selector: 'app-add-wine-form',
  templateUrl: './add-wine-form.component.html',
  styleUrls: ['./add-wine-form.component.scss']
})
export class AddWineFormComponent implements OnInit {

  wine: Wine
  wineComposition: string = ""
  wineNotes: string = ""
  winePickedBy: string = ""

  constructor(private drinkService: DrinkService, private router:Router) { 
    this.wine = {kind:"Wine", name: ""}

  }

  ngOnInit(): void {
    
  }

  updateWineComposition(): void {
    // update wine compostion
  }

  updateWineTastingNotes(): void {}

  updateWinePickedBy(): void {}

  submitWine(): void {
    this.drinkService.addDrink(Drinks.WINES, this.wine).subscribe(result => {
      //console.log(result)
      this.router.navigate(['/wine'])
    })
  }

  cancel(): void {
    this.wine = {kind: "Wine", name:""}
    this.router.navigate(['/wine'])
  }

}
