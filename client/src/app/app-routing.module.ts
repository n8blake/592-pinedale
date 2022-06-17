import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './common/menu-list/menu-list.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'wine', component: MenuListComponent},
  { path: 'whiskey', component: MenuListComponent},
  { path: 'beer', component: MenuListComponent},
  { path: 'cocktails', component: MenuListComponent},
  { path: '', redirectTo: '/wine', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
