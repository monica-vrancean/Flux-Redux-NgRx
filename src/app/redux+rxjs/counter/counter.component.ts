import { Component } from '@angular/core';
import { CounterRxJsService } from './counter.service';
import { Observable } from 'rxjs/Observable';
import { Counter } from '../../models/counter';
import { State } from '../store/state';
import { Store } from '../store/store';

@Component({
  selector: 'app-counter-rxjs',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterRxJsComponent {
  store: Store<State>;
  state: State;
  isEvenNumber: boolean;
  counterValue: Observable<number>;

  constructor(private counterService: CounterRxJsService) {
    this.store = this.counterService.store;

    this.counterValue = this.store.map((state) => {
      return state.counter.value;
    });
  }

  increaseCounter() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decreaseCounter() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  isEven(): Observable<boolean> {
    return this.store.map(state => state.counter.value % 2 === 0);
   }
}
