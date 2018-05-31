import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.randomForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenProjectNameAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.randomForm);
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { 'forbiddenName': true };
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<{[s: string]: boolean}> | Observable<{[s: string]: boolean}> {
    const promise = new Promise<{[s: string]: boolean}>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ 'forbiddenName': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
