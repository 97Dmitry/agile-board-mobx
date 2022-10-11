import Api from "api";
import { User } from "api/types";
import { makeAutoObservable } from "mobx";

import { IsAuthorized } from "../core/IsAuthorized";

class Store {
  private _isLoading = false;
  private _me: User | undefined;
  private _isAuthorized = new IsAuthorized();

  constructor() {
    makeAutoObservable(this);
  }

  get me() {
    return this._me;
  }

  get isAuthorized() {
    return this._isAuthorized.value;
  }

  get isLoading() {
    return this._isLoading;
  }

  login = async () => {
    this._isLoading = true;
    try {
      const user = await Api.post("login", { login: "admin", password: "123456" });
      if (user) {
        this._me = user;
        this._isAuthorized.setTrue();
      }
    } finally {
      this._isLoading = false;
    }
  };

  logout = () => {
    this._isAuthorized.setFalse();
    this._me = undefined;
  };
}

export const meStore = new Store();
