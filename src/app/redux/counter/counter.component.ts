import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs/Observable';
import { Counter } from '../../models/counter';
import { State } from '../store/state';
import { Store } from '../store/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class ReduxCounterComponent {
  store: Store;
  state: State;

  constructor(private counterService: CounterService) {
    this.store = this.counterService.store;
  }

  // get's called by angular change detection lifecycle
  get counterValue() {
    return this.store.getState().counter.value;
  }

  increaseCounter() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decreaseCounter() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  isEven(): boolean {
    return this.counterValue % 2 === 0;
  }
}
