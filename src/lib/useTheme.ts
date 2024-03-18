import { useContext } from "react";
import { Theme } from "./types";
import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "./localStorage";

interface UseThemeResult {
  toggleTheme: (theme: Theme) => void;
  theme: Theme;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (newTheme: Theme) => {
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.RED_GREEN,
    toggleTheme,
  };
};

export default useTheme;
