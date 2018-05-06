import { Action } from "./action";

type Reducer<T> = (state: T, action: Action) => T;
