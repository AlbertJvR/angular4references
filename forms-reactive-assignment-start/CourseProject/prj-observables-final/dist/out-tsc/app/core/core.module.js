var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    NgModule({
        declarations: [
            HeaderComponent,
            HomeComponent
        ],
        imports: [
            SharedModule,
            AppRoutingModule
        ],
        exports: [
            AppRoutingModule,
            HeaderComponent
        ],
        providers: [
            ShoppingListService,
            RecipeService,
            DataStorageService,
            AuthService,
            AuthGuardService
        ]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=D:/Work/GitRepos/Angular4References/CourseProject/prj-observables-final/src/app/core/core.module.js.map