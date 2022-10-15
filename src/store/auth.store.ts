import { LoginDto, User } from "api/types";
import { IsAuthorized } from "core/IsAuthorized";
import { IsLoading } from "core/IsLoading";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AuthService } from "services/auth.service";

export class AuthStore {
  constructor(
    private readonly authService: AuthService,
    private readonly isLoadingState: IsLoading,
    private readonly isAuthorizedState: IsAuthorized) {
    makeAutoObservable(this);
  }

  private _me: User | undefined;

  get me() {
    return toJS(this._me);
  }

  get isAuthorized() {
    return this.isAuthorizedState.value;
  }

  get isLoading() {
    return this.isLoadingState.value;
  }

  login = async (payload: LoginDto) => {
    this.isLoadingState.setTrue();
    try {
      const user = await this.authService.login(payload);
      runInAction(() => (this._me = user));
      this.isAuthorizedState.setTrue();
    } catch (error) {
      error instanceof Error && console.log(error.message);
    } finally {
      this.isLoadingState.setFalse();
    }
  };

  logout = () => {
    this.isAuthorizedState.setFalse();
    this._me = undefined;
  };
}
