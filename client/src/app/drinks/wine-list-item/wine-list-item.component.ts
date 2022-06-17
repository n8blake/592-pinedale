import { Component, Input, OnInit } from '@angular/core';
import { Drink, Wine } from '../drinks.model';

@Component({
  selector: 'app-wine-list-item',
  templateUrl: './wine-list-item.component.html',
  styleUrls: ['./wine-list-item.component.scss']
})
export class WineListItemComponent implements OnInit {

  @Input() wine!: Wine

  constructor() { }

  ngOnInit(): void {
  }

}
