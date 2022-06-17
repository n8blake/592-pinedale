import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MenuListComponent } from './common/menu-list/menu-list.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { WineListItemComponent } from './drinks/wine-list-item/wine-list-item.component';
import { BeerListItemComponent } from './drinks/beer-list-item/beer-list-item.component';
import { WhiskeyListItemComponent } from './drinks/whiskey-list-item/whiskey-list-item.component';
import { CocktailsListItemComponent } from './drinks/cocktails-list-item/cocktails-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    PageNotFoundComponent,
    WineListItemComponent,
    BeerListItemComponent,
    WhiskeyListItemComponent,
    CocktailsListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
