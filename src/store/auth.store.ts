import { LoginDto, User } from "api/types";
import { IsAuthorized } from "core/IsAuthorized";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AuthService } from "services/auth.service";

export class AuthStore {
  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
  }

  private _isLoading = false;
  private _me: User | undefined;
  private _isAuthorized = new IsAuthorized();

  get me() {
    return toJS(this._me);
  }

  get isAuthorized() {
    return this._isAuthorized.value;
  }

  get isLoading() {
    return this._isLoading;
  }

  login = async (payload: LoginDto) => {
    this._isLoading = true;
    try {
      const user = await this.authService.login(payload);
      runInAction(() => (this._me = user));

      this._isAuthorized.setTrue();
    } catch (error) {
      error instanceof Error && console.log(error.message);
    } finally {
      this._isLoading = false;
    }
  };

  logout = () => {
    this._isAuthorized.setFalse();
    this._me = undefined;
  };
}
