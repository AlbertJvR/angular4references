import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('randomForm') randomForm: NgForm;
  defaultSubscription = 'Advanced';
  submitted = false;

  registration = {
    registrationData: {
      email: '',
      subscription: '',
      password: ''
    }
  };

  subscriptions = [
    'Basic',
    'Advanced',
    'Pro',
  ];

  onSubmit() {
    this.submitted = true;

    this.registration.registrationData.email = this.randomForm.value.registrationData.email;
    this.registration.registrationData.subscription = this.randomForm.value.registrationData.subscription;
    this.registration.registrationData.password = this.randomForm.value.registrationData.password;

    this.randomForm.reset();
  }
}
