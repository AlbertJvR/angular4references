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
import * as firebase from 'firebase';
import { Router } from '@angular/router';
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signUpUser = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.signInUser = function (email, password) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase.auth().currentUser.getToken()
                .then(function (token) { _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase.auth().currentUser.getToken()
            .then(function (token) { _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logOut = function () {
        firebase.auth().signOut();
        this.token = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=D:/Work/GitRepos/Angular4References/CourseProject/prj-observables-final/src/app/auth/auth.service.js.map