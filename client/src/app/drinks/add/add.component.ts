import { Component, OnInit } from '@angular/core';
import { Drinks } from '../drinks.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  drinkType!: Drinks

  constructor() { 
    
  }

  ngOnInit(): void {
    //this.drinkType = Drinks.WINES
  }

}
