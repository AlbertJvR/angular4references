import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // Use 'canLoad' instead of 'canActivate' when you want to guard lazy loaded route, else it loads code you cant access anyways
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService]},
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
