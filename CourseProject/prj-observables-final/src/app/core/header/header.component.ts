import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {Recipe} from '../../recipes/recipe.model';
import {RecipeService} from '../../recipes/recipe.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  dataStoreSubscription: Subscription;
  fetchSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              public authService: AuthService) {}

  onSaveData() {
    this.dataStoreSubscription = this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => { console.log(response); }
      );
  }

  onFetchData() {
    this.fetchSubscription = this.dataStorageService.fetchRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

  ngOnDestroy() {
    this.dataStoreSubscription.unsubscribe();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
