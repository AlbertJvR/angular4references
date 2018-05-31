import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // const token = this.authService.getToken(); // now in an Interceptor
    // When not using firebase and you want to set bearer token, do the following:
    /*const headers = new HttpHeaders().set('Authorization', 'Bearer fqiwggopiqhwpog');

    return this.httpClient.put('https://udemy-ng-http-122c2.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        // observe: 'events'
        // headers: headers // would do this if you not using firebase but rather Identity
        observe: 'body', // this is the default btw
        params: new HttpParams().set('auth', token)
      });*/
    const request = new HttpRequest('PUT',
            'https://udemy-ng-http-122c2.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),
            {
              reportProgress: true, // can hook into this for progress bars etc
              // params: new HttpParams().set('auth', token) // now in an Interceptor
            });

    return this.httpClient.request(request);
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://udemy-ng-http-122c2.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get('https://udemy-ng-http-122c2.firebaseio.com/recipes.json', {
      // observe: 'response',
      // these are the defaults
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
    })
      .map(
        (recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
