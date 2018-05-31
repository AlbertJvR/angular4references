var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';
var HeaderComponent = (function () {
    function HeaderComponent(dataStorageService, recipeService, authService) {
        this.dataStorageService = dataStorageService;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStoreSubscription = this.dataStorageService.storeRecipes()
            .subscribe(function (response) { console.log(response); });
    };
    HeaderComponent.prototype.onFetchData = function () {
        var _this = this;
        this.fetchSubscription = this.dataStorageService.fetchRecipes()
            .subscribe(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.dataStoreSubscription.unsubscribe();
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.logOut();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [DataStorageService,
        RecipeService,
        AuthService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=D:/Work/GitRepos/Angular4References/CourseProject/prj-observables-final/src/app/core/header/header.component.js.map