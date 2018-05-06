import {Action} from './generic/action';
import {State} from './state';

export class Store {
  private _state: State;

  constructor(
    private reducer,
    initialState: State
  ) {
    this._state = initialState;
  }

  getState(): State {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
  }
}
