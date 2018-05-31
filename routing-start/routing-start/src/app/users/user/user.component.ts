import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        });
  }

  // Dont have to do this as it is cleaned up by angular for you
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}