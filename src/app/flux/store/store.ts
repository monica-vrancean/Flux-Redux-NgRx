import {State} from './state';
import { FluxDispatcher } from './dispatcher';
import { Counter } from '../../models/counter';
import { Injectable } from '@angular/core';
import { Action } from '../../generic/action';

@Injectable()
export class FluxStore {
  private state: State;
  private _listeners: StateListenerCallback[] = [];

  constructor(
    private dispatcher: FluxDispatcher
  ) {
      this.initializeState();
      dispatcher.subscribe((action) => {
        this.state = this.reduce(action);
        this.emit(this.state);
      });
  }

  getState(){
    return this.state;
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

subscribe(listener: StateListenerCallback) {
  this._listeners.push(listener);
}

private emit(state: State): void {
  this._listeners.forEach((listener: StateListenerCallback) => listener(state));
}

 private initializeState(){
  let initialCounter: Counter = { value: 0 };
  let initialState: State = { counter: initialCounter };
  this.state = initialState;
 }
}
