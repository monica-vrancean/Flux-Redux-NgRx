import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "./counter/counter.reducer";
import { AppState } from "./app-state";
import { appViewStateReducer } from "./app-view-state/app-view-state.reducer";

//create reducer / state
export const reducers: ActionReducerMap<AppState>={
  counterState: counterReducer,
  appViewState: appViewStateReducer
};
