import { createContext } from "react";
import { themeContextProps } from "@/models";

export const ThemeContext = createContext<themeContextProps>(
  {} as themeContextProps
);
