import { Component } from '@angular/core';
import { CounterListenerService } from './counter.service';
import { Observable } from 'rxjs/Observable';
import { Counter } from '../../models/counter';
import { State } from '../store/state';
import { Store } from '../store/store';

@Component({
  selector: 'app-counter-listener',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterListenerComponent {
  store: Store<State>;
  state: State;
  isEvenNumber: boolean;
  counterValue:number;

  constructor(private counterService: CounterListenerService) {
    this.store = this.counterService.store;

    this.store.subscribe((state) => {
      this.counterValue = state.counter.value;
      this.isEven();
    });

    this.store.dispatch({type: 'GET'});
  }

  increaseCounter() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decreaseCounter() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  isEven() {
   return this.counterValue % 2 === 0;
  }
}
