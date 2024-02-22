import React from "react";

export type Theme = "light" | "dark";
type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);
