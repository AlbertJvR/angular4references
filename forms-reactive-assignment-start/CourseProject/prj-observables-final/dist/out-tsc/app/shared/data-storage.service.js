var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
var DataStorageService = (function () {
    function DataStorageService(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var token = this.authService.getToken();
        return this.http
            .put('https://udemy-ng-http-122c2.firebaseio.com/recipesSource.json?auth=' + token, this.recipeService.getRecipes());
    };
    DataStorageService.prototype.fetchRecipes = function () {
        var token = this.authService.getToken();
        return this.http.get('https://udemy-ng-http-122c2.firebaseio.com/recipesSource.json?auth=' + token)
            .map(function (response) {
            var recipes = response.json();
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
            .catch(function (error) {
            return Observable.throw('Something is broken:' + error.json());
        });
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        RecipeService,
        AuthService])
], DataStorageService);
export { DataStorageService };
//# sourceMappingURL=D:/Work/GitRepos/Angular4References/CourseProject/prj-observables-final/src/app/shared/data-storage.service.js.map