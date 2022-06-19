import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './common/menu-list/menu-list.component';
import { AddComponent } from './drinks/add/add.component';
import { DrinkListResolverService } from './drinks/drink-list-resolver.service';
import { DrinkService } from './drinks/drink.service';
import { Drinks } from './drinks/drinks.model';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'wine', component: MenuListComponent, resolve: {
    drink : DrinkListResolverService
  }},
  { path: 'whiskey', component: MenuListComponent, resolve: {
    drink : DrinkListResolverService
  }},
  { path: 'beer', component: MenuListComponent, resolve: {
    drink : DrinkListResolverService
  }},
  { path: 'cocktails', component: MenuListComponent, resolve: {
    drink : DrinkListResolverService
  }},
  { path: 'add', component: AddComponent },
  { path: '', redirectTo: '/cocktails', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
