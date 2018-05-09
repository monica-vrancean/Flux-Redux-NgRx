import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RxCounter } from '../models/rx-counter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-mvc-rx-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterMvcRxComponent {
  rxJsCounterValue: Observable<number>;
  private rxJsCounter: RxCounter;

  constructor() {
    this.rxJsCounter =  new RxCounter();
    this.rxJsCounterValue = this.rxJsCounter.map(counterValue => {
      return counterValue;
    });
  }

  increaseRxJsCounter(){
    this.rxJsCounter.increaseValue();
  }

  isEvenObs(): Observable<boolean> {
   return this.rxJsCounter.map(value=> value % 2 === 0);
  }
}
