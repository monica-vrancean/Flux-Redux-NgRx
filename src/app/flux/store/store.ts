import {Action} from './generic/action';
import {State} from './state';
import { FluxDispatcher } from './dispatcher';
import { Counter } from '../../models/counter';
import { Injectable } from '@angular/core';

@Injectable()
export class FluxStore {
  private state: State;
  private _listeners: ListenerCallback[] = [];

  constructor(
    private dispatcher: FluxDispatcher
  ) {
      this.initializeState();
      dispatcher.subscribe((action) => {
        this.state = this.reduce(action);
        this.emit(this.state);
      });
  }

 reduce(action: Action): State{
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, this.state, {counter: { value : this.state.counter.value + 1}});
    case 'DECREMENT':
      return Object.assign({}, this.state, {counter: { value : this.state.counter.value - 1}});
    default:
      return this.state;
    }
 }

subscribe(listener: ListenerCallback) {
  this._listeners.push(listener);
}

private emit(state: State): void {
  this._listeners.forEach((listener: ListenerCallback) => listener(state));
}

 private initializeState(){
  let initialCounter: Counter = { value: 0 };
  let initialState: State = { counter: initialCounter };
  this.state = initialState;
 }
}
