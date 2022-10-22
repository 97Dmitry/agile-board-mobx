import { makeAutoObservable } from "mobx";
import { Themes } from "types/thems";

export class AppStore {
  constructor(initialTheme = Themes.LIGHT) {
    makeAutoObservable(this);
    this._theme = initialTheme;
  }

  private _theme: Themes;

  get theme() {
    return this._theme;
  }

  toggleTheme = () => {
    this._theme = this._theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
  };
}
