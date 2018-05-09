import { CounterListenerCallback } from "../counter/counter-listener-callback";

export class Counter{
  private _listeners: CounterListenerCallback[] = [];
  private _value: number;

  constructor(){ 
      this._value = 0;   
  }

  getValue() {
    return this._value;
  }

  increaseValue() {
      this._value++;
      this._listeners.forEach((listener: CounterListenerCallback) => listener(this._value));
  }
  
  subscribe(listener: CounterListenerCallback) {
    this._listeners.push(listener);
  }
}
