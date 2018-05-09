import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state';
import { Observable } from 'rxjs/Observable';
import { CounterDispatcherService } from '../store/counter/counter-dispatcher.service';
import 'rxjs/add/operator/map'
import { IncrementCounter, DecrementCounter } from '../store/counter/counter.action';

@Component({
  selector: 'app-ng-rx-counter',
  templateUrl: './ng-rx-counter.component.html',
  styleUrls: ['./ng-rx-counter.component.css'],
})
export class NgRxCounterComponent{
  counterValue$: Observable<number>;
  contentColor$: Observable<string>;

  constructor(private store: Store<AppState>){
    this.counterValue$ = store.map(store => {
      return store.counterState.value;
    });
    this.contentColor$ = store.map(store =>{
      return store.appViewState.contentColor;
    })
  }

  increaseCounter(){
    this.store.dispatch(new IncrementCounter());
  }

  decreaseCounter(){
    this.store.dispatch(new DecrementCounter());
  }

  isEven(): Observable<boolean>{
    return this.counterValue$.map(counterValue => counterValue % 2 === 0);
  }
}
