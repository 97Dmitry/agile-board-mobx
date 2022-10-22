import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export type ThemeType = typeof lightTheme & typeof darkTheme;

export const ThemesList = [lightTheme, darkTheme];
