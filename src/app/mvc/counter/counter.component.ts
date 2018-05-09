import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Counter } from '../models/counter';
import { RxCounter } from '../models/rx-counter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-mvc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterMvcComponent {
  counter: Counter;

  constructor() {
    this.counter = new Counter();
  }

  increaseCounter() {
    this.counter.increaseValue();
  }

  isEven() {
    return this.counter.value % 2 === 0;
  }
}
