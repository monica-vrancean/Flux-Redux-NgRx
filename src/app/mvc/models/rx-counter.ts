import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Counter } from "../../models/counter";

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
