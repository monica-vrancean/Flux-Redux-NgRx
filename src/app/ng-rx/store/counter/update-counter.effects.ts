import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './counter.action';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Observable } from 'rxjs/Observable';
import { UpdateColor } from '../app-view-state/app-view-state.action';

@Injectable()
export class UpdateCounterEffects {
  private counterValue$: Observable<number>;

  constructor(
    private actions$: Actions,    
    private store$: Store<AppState>
  ) {    
    this.counterValue$ = this.store$.select(x => x.counterState.value);
  }

  @Effect()
  changeColorOnIncrement$ = this.actions$
    .ofType(INCREMENT_COUNTER)
    .map((value) => new UpdateColor('blue'));

    @Effect()
  changeColorOnDecrement$ = this.actions$
      .ofType(DECREMENT_COUNTER)
      .map((value) => new UpdateColor('green'));
}

