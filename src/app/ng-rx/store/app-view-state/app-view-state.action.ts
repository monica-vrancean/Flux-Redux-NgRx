import { Action } from '@ngrx/store';
import { ActionWithPayload } from './action-with-payload';

export const UPDATE_COLOR = '[App view state] Update color';

export class UpdateColor implements ActionWithPayload<string>{
  readonly type = UPDATE_COLOR;
  constructor(public payload: string){
  }
}

export type AppViewStateAction
= UpdateColor;
