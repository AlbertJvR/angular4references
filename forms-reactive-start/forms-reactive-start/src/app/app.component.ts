import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesCheck.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
        'gender': new FormControl('male'),
        'hobbies': new FormArray([])
      })
    });
    // When absolutely anything on the form changes this method fires, observable....
    // This is also available for every control
    // this.signupForm.valueChanges
    //   .subscribe(
    //     (value) => console.log(value)
    //   );

    // Hook for the status of the form or control, same as VALUECHANGES hook, but returns VALID,
    // INVALID, PENDING
    // this.signupForm.statusChanges
    //   .subscribe(
    //     (status) => console.log(status)
    //   );

    // Use this to set the value of the entire form object
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Albert',
    //     'email': 'albert.jvrens@test.com',
    //     'gender': 'Male',
    //     'hobbies': []
    //   }
    // });

    // Use this if you just need to patch some of the form values
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
        'email': 'albert.jvrens@test.com'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      userData: {
        username: '',
        email: '',
        gender: 'female',
        hobbies: []
      }
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('userData.hobbies')).push(control);
  }

  forbiddenNamesCheck(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
