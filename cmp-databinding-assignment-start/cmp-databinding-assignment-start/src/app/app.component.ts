import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [];

  onEventEmitted(event: {count: number}) {
    this.elements.push(event);
  }
}
