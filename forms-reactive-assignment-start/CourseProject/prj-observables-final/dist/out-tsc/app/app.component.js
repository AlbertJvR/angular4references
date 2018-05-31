var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import * as firebase from 'firebase';
// to get this to work I had to run this command : npm install promise-polyfill --save-exact
var AppComponent = (function () {
    function AppComponent() {
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.initializeApp({
            apiKey: 'AIzaSyDVwjnnSlaQJ3o8LiNP8Ruy4ZT-GuMrNAU',
            authDomain: 'udemy-ng-http-122c2.firebaseapp.com'
        });
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=D:/Work/GitRepos/Angular4References/CourseProject/prj-observables-final/src/app/app.component.js.map