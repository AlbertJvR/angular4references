import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  incrementCounter() {
    console.log(++this.count);
  }
}
