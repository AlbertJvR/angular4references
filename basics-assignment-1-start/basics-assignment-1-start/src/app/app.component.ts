import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageBool: boolean = false;

  toggleBool(): void {
    this.messageBool = !this.messageBool;
  }
}
