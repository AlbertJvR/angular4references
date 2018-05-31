import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule, // need this import in feature modules to gain access to ngClass, ngIf etc
    DropdownDirective
  ]
})
export class SharedModule {

}
