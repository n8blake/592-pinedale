import { Component, Input, OnInit } from '@angular/core';
import { Cocktial } from '../drinks.model';

@Component({
  selector: 'app-cocktails-list-item',
  templateUrl: './cocktails-list-item.component.html',
  styleUrls: ['./cocktails-list-item.component.scss']
})
export class CocktailsListItemComponent implements OnInit {

  @Input() cocktail!: Cocktial

  constructor() { }

  ngOnInit(): void {
  }

}
