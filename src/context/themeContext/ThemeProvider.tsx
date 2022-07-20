import { useReducer, useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { InitialState } from "@/models";
import { ThemeReducer } from "./ThemeReducer";
import { ItemMenu } from "@/models";

const INITIAL_STATE: InitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  menuOptions: [] as ItemMenu[],
  voucher: false,
  voucherField: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: Props) => {
  const [themeState, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

  const [screenSize, setScreenSize] = useState(0);
  const [currentColor, setCurrentColor] = useState("#03C9cd");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: string, value: boolean) => {
    dispatch({ type: "SET_CLICKED", payload: { name: clicked, value } });
  };

  const setMenuOptions = (value: ItemMenu[]) => {
    dispatch({ type: "SET_MENU_OPTIONS", payload: value });
  };

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        setMode,
        currentMode,
        setColor,
        currentColor,
        setThemeSettings,
        themeSettings,
        setActiveMenu,
        activeMenu,
        setScreenSize,
        screenSize,
        handleClick,
        setCurrentMode,
        setCurrentColor,
        setMenuOptions,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
