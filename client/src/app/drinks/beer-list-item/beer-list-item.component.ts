import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../drinks.model';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.scss']
})
export class BeerListItemComponent implements OnInit {

  @Input() beer!: Beer

  constructor() { }

  ngOnInit(): void {
  }

}
