import { Injectable } from "@angular/core";
import { FluxStore } from "./store";
import { Action } from "@ngrx/store/public_api";

@Injectable()
export class FluxDispatcher{
  private _listeners: StateListenerCallback[] = [];
  constructor(){
  }

  dispatch(action: Action): void {
    this._listeners.forEach((listener: StateListenerCallback) => listener(action));
  }

  subscribe(listener: StateListenerCallback) {
    this._listeners.push(listener);
  }
}
