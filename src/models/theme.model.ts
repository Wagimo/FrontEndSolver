import { InitialState } from "./initialState.model";
import { ItemMenu } from "./ItemMenu";

export interface themeContextProps {
  themeState: InitialState;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentMode: (mode: string) => void;
  setCurrentColor: (mode: string) => void;
  setColor: (color: string) => void;
  setThemeSettings: (e: boolean) => void;
  setActiveMenu: (e: boolean) => void;
  setScreenSize: (e: number) => void;
  handleClick: (clicked: string, value: boolean) => void;
  setMenuOptions: (value: ItemMenu[]) => void;
  currentMode: string;
  currentColor: string;
  themeSettings: boolean;
  activeMenu: boolean;
  screenSize: number;
}
