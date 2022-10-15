import { IsLoading } from "core/IsLoading";
import { makeAutoObservable, runInAction } from "mobx";
import { UsersService } from "services/users.service";
import { errorHandler } from "utils/errorHandler";

import { User } from "../api/types";

export class UsersStore {
  constructor(
    private readonly usersService: UsersService,
    private readonly isLoadingState: IsLoading
  ) {
    makeAutoObservable(this);
  }

  private _users: Array<User> = [];

  get users() {
    return this._users;
  }

  getUsers = async () => {
    this.isLoadingState.setTrue();
    try {
      const users = await this.usersService.users();
      users && runInAction(() => this._users = users);
    } catch (error) {
      errorHandler(error);
    } finally {
      this.isLoadingState.setFalse();
    }
  };
}
