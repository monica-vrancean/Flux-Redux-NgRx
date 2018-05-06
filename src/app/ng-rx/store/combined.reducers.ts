import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { AppState } from "./app-state";

//create reducer / state
export const reducers: ActionReducerMap<AppState>={
  counterState: counterReducer
};
