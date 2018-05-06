import { State } from './state';
import { Action } from './generic/action';

export function reducer(state: State, action: Action) {
  switch (action.type) {
  case 'INCREMENT':
    return Object.assign({}, state, {counter: { value : state.counter.value + 1}});
  case 'DECREMENT':
    return Object.assign({}, state, {counter: { value : state.counter.value - 1}});
  case 'PLUS':
    return Object.assign({}, state, {counter: { value : state.counter.value + action.payload}});
  default:
    return state;
  }
}
