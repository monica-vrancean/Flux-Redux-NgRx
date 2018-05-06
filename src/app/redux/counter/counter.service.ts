import { Injectable } from '@angular/core';
import { Counter } from '../../models/counter';
import { State } from '../store/state';
import { reducer } from '../store/reducer';
import { Store } from '../store/store';


@Injectable()
export class CounterService {
 public store: Store;
 constructor() {
   const initialCounter: Counter = {value: 0};
   const initialState: State = {counter: initialCounter};
   this.store =  new Store(reducer, initialState);
 }
}
