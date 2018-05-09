import { Action } from '@ngrx/store';

export const GET_COUNTER = '[Counter] Get Counter';
export const INCREMENT_COUNTER = '[Counter] Increment Counter';
export const DECREMENT_COUNTER = '[Counter] Decrement Counter';

export class GetCounter implements Action{
  readonly type = GET_COUNTER;
}

export class IncrementCounter implements Action{
  readonly type = INCREMENT_COUNTER;
}

export class DecrementCounter implements Action{
  readonly type = DECREMENT_COUNTER;
}

export type CounterAction
= GetCounter |
IncrementCounter|
DecrementCounter;
