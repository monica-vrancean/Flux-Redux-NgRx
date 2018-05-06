export class Counter {
  private _value: number;

  constructor() {
    this._value = 0;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  increaseValue() {
   this._value++;
  }
}
