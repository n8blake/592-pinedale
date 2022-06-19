import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drinks } from '../drinks.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  drinkType!: Drinks

  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    //this.drinkType = Drinks.WINES
    this.route.queryParams.subscribe(params => {
      let type = ""
      if(params['type']){
        type = params['type'].toLocaleLowerCase()
      }
      switch(type){
        case 'wines':
          this.drinkType = Drinks.WINES
          break
        case 'cocktails':
            this.drinkType = Drinks.COCKTAILS
          break
        case 'beers':
          this.drinkType = Drinks.BEERS
          break
        case 'whiskies':
          this.drinkType = Drinks.WHISKIES
            break
        default :
          this.drinkType = Drinks.COCKTAILS
      }
  })
  }

  updateQueryParams(): void {
    this.router.navigate(
      [],
      { 
        relativeTo: this.route,
        queryParams: {type: this.drinkType.toLocaleLowerCase()}
      }
    )
  }

}
