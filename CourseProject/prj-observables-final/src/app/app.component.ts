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
      apiKey: 'YOUR-API-KEY-HERE',
      authDomain: 'YOUR-FIREBASE-APP-DOMAIN-HERE'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
