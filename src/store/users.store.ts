import { makeAutoObservable } from "mobx";

import Api from "../api";
import { User } from "../api/types";

class Store {
  private _isLoading = false;
  private _users: Array<User> = [];

  constructor() {
    makeAutoObservable(this, {});
  }

  get users() {
    return this._users;
  }

  getUsers = async () => {
    this._isLoading = true;
    try {
      this._users = await Api.get("users");
    } finally {
      this._isLoading = false;
    }
  };
}

export const usersStore = new Store();
