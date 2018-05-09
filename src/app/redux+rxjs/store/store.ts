import {Action} from '../../generic/action';
import {State} from './state';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Store<State> extends BehaviorSubject<State> {
  private _dispatcher: Subject<Action>;

  constructor(
    private reducer,
    initialState: State
  ) {
    super(initialState);
  }

  dispatch(action: Action): void {
    let newState =  this.reducer(this.value, action);
    super.next(newState);
  }
}
