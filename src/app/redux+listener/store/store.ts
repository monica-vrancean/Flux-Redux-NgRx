import {State} from './state';
import { Action } from '../../generic/action';

export class Store<State>  {
  private _state: State;
  private _listeners: StateListenerCallback[] = [];

  constructor(
    private reducer,
    initialState: State
  ) {
    this._state = initialState;

  }

  getState() {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: StateListenerCallback) => listener(this._state));
  }

  subscribe(listener: StateListenerCallback) {
    this._listeners.push(listener);
  }
}
