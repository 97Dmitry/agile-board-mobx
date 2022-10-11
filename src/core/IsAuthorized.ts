import { makeAutoObservable } from "mobx";

export class IsAuthorized {
  constructor(initialFlag = false) {
    makeAutoObservable(this);
    this._value = initialFlag;
  }

  private _value = false;

  get value() {
    return this._value;
  }

  setTrue = () => {
    this._value = true;
  };

  setFalse = () => {
    this._value = false;
  };

  toggle = () => {
    this._value = !this._value;
  };
}
