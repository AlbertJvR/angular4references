import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph = false;
  auditArray = [];


  onButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.auditArray.push(new Date().toLocaleString());
  }

  shouldStyleElement(auditObject): boolean {
    return auditObject.Index >= 4;
  }
}
