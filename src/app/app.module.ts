import { CounterListenerService } from './redux+listener/counter/counter.service';
import { CounterService } from './redux/counter/counter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { ReduxCounterComponent } from './redux/counter/counter.component';
import { CounterListenerComponent } from './redux+listener/counter/counter.component';
import { CounterRxJsService } from './redux+rxjs/counter/counter.service';
import { CounterRxJsComponent } from './redux+rxjs/counter/counter.component';
import { CounterMvcComponent } from './mvc/counter/counter.component';
import { reducers } from './ng-rx/store/combined.reducers';
import { appInitialState } from './ng-rx/store/initial-states';
import { NgRxCounterComponent } from './ng-rx/counter/ng-rx-counter.component';
import { CounterDispatcherService } from './ng-rx/store/counter/counter-dispatcher.service';
import { FluxCounterComponent } from './flux/counter/counter.component';
import { FluxDispatcher } from './flux/store/dispatcher';
import { FluxStore } from './flux/store/store';
import { FormsModule } from '@angular/forms';
import { CounterMvcRxComponent } from './mvc-rx/counter/counter.component';
import { CounterMvcListenerComponent } from './mvc-listener/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { UpdateCounterEffects } from './ng-rx/store/counter/update-counter.effects';


@NgModule({
  declarations: [
    AppComponent,
    ReduxCounterComponent,
    CounterListenerComponent,
    CounterRxJsComponent,
    CounterMvcComponent,
    NgRxCounterComponent,
    FluxCounterComponent,
    CounterMvcRxComponent,
    CounterMvcListenerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      initialState: {counterState:{value: 0}}
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UpdateCounterEffects])
  ],
  providers:[
  CounterService,
  CounterListenerService,
  CounterRxJsService,
  CounterDispatcherService,
  FluxStore,
  FluxDispatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
