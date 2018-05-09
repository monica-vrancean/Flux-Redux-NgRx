import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Counter } from '../../models/counter';
import { State } from '../store/state';
import { FluxDispatcher } from '../store/dispatcher';
import { FluxStore } from '../store/store';

@Component({
  selector: 'app-flux-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class FluxCounterComponent {
  counterValue : number;

  constructor(private dispatcher: FluxDispatcher, private store: FluxStore) {
    this.counterValue = this.store.getState().counter.value;
    this.store.subscribe((state)=>{
      this.counterValue = state.counter.value;
    });
  }

  increaseCounter() {
    this.dispatcher.dispatch({type: 'INCREMENT'});
  }

  decreaseCounter() {
    this.dispatcher.dispatch({type: 'DECREMENT'});
  }

  isEven(): boolean {
    return this.counterValue % 2 === 0;
   }
}
