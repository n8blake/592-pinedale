import { Component, Input, OnInit } from '@angular/core';
import { Whiskey } from '../drinks.model';

@Component({
  selector: 'app-whiskey-list-item',
  templateUrl: './whiskey-list-item.component.html',
  styleUrls: ['./whiskey-list-item.component.scss']
})
export class WhiskeyListItemComponent implements OnInit {

  @Input() whiskey!: Whiskey

  constructor() { }

  ngOnInit(): void {
  }

}
