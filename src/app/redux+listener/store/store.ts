import {Action} from './generic/action';
import {State} from './state';

export class Store<State>  {
  private _state: State;
  private _listeners: ListenerCallback[] = [];

  constructor(
    private reducer,
    initialState: State
  ) {
    this._state = initialState;

  }

  getState() {
    this._listeners.forEach((listener: ListenerCallback) => listener(this._state));
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener(this._state));
  }

  subscribe(listener: ListenerCallback) {
    this._listeners.push(listener);
  }
}
