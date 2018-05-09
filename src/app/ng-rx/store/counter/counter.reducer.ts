import { Counter } from "../../../models/counter";
import { Action } from "@ngrx/store";
import { CounterAction, GET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./counter.action";
import { CounterState } from "./counter-state";
import { counterInitialState } from "../initial-states";

export function counterReducer(state:CounterState = counterInitialState, action:Action): CounterState{
  let counterAction = action as CounterAction;
  switch(counterAction.type){
    case GET_COUNTER:{
      return Object.assign({}, state);
    }
    case INCREMENT_COUNTER:{
      let newCounterValue = state.value + 1;
      return Object.assign({}, state, {value: newCounterValue});
    }
    case DECREMENT_COUNTER:{
      let newCounterValue = state.value - 1;
      return Object.assign({}, state, {value: newCounterValue});
    }
    default:{
      return state;
    }
  }
}
