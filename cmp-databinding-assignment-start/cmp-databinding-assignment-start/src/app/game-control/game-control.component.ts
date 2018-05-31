import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  private timer;
  private localCount = 0;
  @Output() timerHasTicked = new EventEmitter<{count: number}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.timer = setInterval(() => {
      this.timerHasTicked.emit({
        count: this.localCount++
      });
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
