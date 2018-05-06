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
  _asyncCounterValue: Observable<number>;
  isEvenNumber: boolean = false;
  rxJsCounterValue: Observable<number>;
  private rxJsCounter: RxCounter;

  constructor() {
    this.counter = new Counter();

    this.rxJsCounter =  new RxCounter();
    this.rxJsCounterValue = this.rxJsCounter.map(counterValue => {
      return counterValue;
    });
  }

  increaseCounter() {
    this.counter.increaseValue();
  }

  increaseRxJsCounter(){
    this.rxJsCounter.increaseValue();
  }

  isEven() {
    return this.counter.value % 2 === 0;
  }

  isEvenObs(): Observable<boolean> {
   return this.rxJsCounter.map(value=> value % 2 === 0);
  }
}
