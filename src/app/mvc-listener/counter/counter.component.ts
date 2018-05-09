import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-mvc-listener-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterMvcListenerComponent {
  counterValue: number;
  private counter: Counter;

  constructor() {
    this.counter =  new Counter();
     this.counter.subscribe(counterValue => {
      this.counterValue = counterValue;
    });
    this.counterValue = this.counter.getValue();
  }

  increaseListenerCounter(){
    this.counter.increaseValue();
  }

  isEven(): boolean{
   return this.counterValue % 2 === 0;
  }
}
