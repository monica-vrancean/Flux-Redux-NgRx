import { Injectable } from "@angular/core";
import { FluxStore } from "./store";
import { Action } from "./generic/action";

@Injectable()
export class FluxDispatcher{
  private _listeners: ListenerCallback[] = [];
  constructor(){
  }

  dispatch(action: Action): void {
    this._listeners.forEach((listener: ListenerCallback) => listener(action));
  }

  subscribe(listener: ListenerCallback) {
    this._listeners.push(listener);
  }
}
