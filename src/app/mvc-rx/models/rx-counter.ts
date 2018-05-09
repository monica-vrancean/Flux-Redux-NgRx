import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class RxCounter extends BehaviorSubject<number> {
  constructor() {
    super(0);
  }

  get value() {
    return this.getValue();
  }

  increaseValue() {
    super.next(this.getValue()+1);
  }
}
