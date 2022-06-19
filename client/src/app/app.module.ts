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
import { AddComponent } from './drinks/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCocktailFormComponent } from './drinks/add/add-cocktail-form/add-cocktail-form.component';
import { AddWineFormComponent } from './drinks/add/add-wine-form/add-wine-form.component';
import { AddBeerFormComponent } from './drinks/add/add-beer-form/add-beer-form.component';
import { AddWhiskeyFormComponent } from './drinks/add/add-whiskey-form/add-whiskey-form.component';
import { HttpClientModule } from '@angular/common/http'
import { DrinkService } from './drinks/drink.service';
import { DrinkListResolverService } from './drinks/drink-list-resolver.service';


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
    CocktailsListItemComponent,
    AddComponent,
    AddCocktailFormComponent,
    AddWineFormComponent,
    AddBeerFormComponent,
    AddWhiskeyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DrinkService, DrinkListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
