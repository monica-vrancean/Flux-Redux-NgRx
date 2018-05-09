import { Counter } from "../../models/counter";
import { AppState } from "./app-state";
import { CounterState } from "./counter/counter-state";
import { AppViewState } from "./app-view-state/app-view-state";

export const counterInitialState:CounterState = {
  value:0
};

export const appViewStateInitialState:AppViewState = {
  contentColor: 'black '
};

export function appInitialState():AppState{
  return {
    counterState:counterInitialState,
    appViewState: appViewStateInitialState
  };
}
