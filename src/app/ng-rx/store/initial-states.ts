import { Counter } from "../../models/counter";
import { AppState } from "./app-state";
import { CounterState } from "./counter-state";

export const counterInitialState:CounterState = {
  value:0
};

export function appInitialState():AppState{
  return {
    counterState:counterInitialState
  };
}
