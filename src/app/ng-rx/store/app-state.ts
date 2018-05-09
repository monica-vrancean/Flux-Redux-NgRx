import { CounterState } from "./counter/counter-state";
import { AppViewState } from "./app-view-state/app-view-state";

export interface AppState{
  counterState: CounterState;
  appViewState: AppViewState;
}
