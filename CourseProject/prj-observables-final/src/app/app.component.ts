import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

// to get this to work I had to run this command : npm install promise-polyfill --save-exact

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVwjnnSlaQJ3o8LiNP8Ruy4ZT-GuMrNAU',
      authDomain: 'udemy-ng-http-122c2.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
