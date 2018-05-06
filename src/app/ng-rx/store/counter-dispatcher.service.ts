import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { GetCounter, IncrementCounter, DecrementCounter } from './counter.action';


@Injectable()
export class CounterDispatcherService {
  constructor(private store: Store<AppState>) {
  }
  dispatchGetCounter() {
    this.store.dispatch(new GetCounter());
  }

  dispatchIncrementCounter() {
    this.store.dispatch(new IncrementCounter());
  }

  dispatchDecrementCounter() {
    this.store.dispatch(new DecrementCounter());
  }
}
