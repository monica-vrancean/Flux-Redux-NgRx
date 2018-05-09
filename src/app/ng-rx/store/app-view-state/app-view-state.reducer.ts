import { Action } from "@ngrx/store";
import { AppViewState } from "./app-view-state";
import { appViewStateInitialState } from "../initial-states";
import { AppViewStateAction, UpdateColor, UPDATE_COLOR } from "./app-view-state.action";
import { ActionWithPayload } from "./action-with-payload";

export function appViewStateReducer(state:AppViewState = appViewStateInitialState, action): AppViewState{
  let appViewStateAction = action as AppViewStateAction;
  switch(appViewStateAction.type){
    case UPDATE_COLOR:{        
        return Object.assign({}, state, {contentColor: action.payload});
    }
    default:{
      return state;
    }
  }
}
