import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {


  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http
      .put(
        'https://udemy-ng-http-122c2.firebaseio.com/recipesSource.json?auth=' + token,
        this.recipeService.getRecipes());
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http.get(
      'https://udemy-ng-http-122c2.firebaseio.com/recipesSource.json?auth=' + token
    )
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something is broken:' + error.json());
        }
      );
  }
}
