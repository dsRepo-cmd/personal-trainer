import { useContext } from "react";
import { Theme } from "./types";
import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "./localStorage";

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.RED_GREEN:
        newTheme = Theme.ORANGE_BLUE;
        break;
      case Theme.ORANGE_BLUE:
        newTheme = Theme.RED_GREEN;
        break;

      default:
        newTheme = Theme.RED_GREEN;
    }
    setTheme?.(newTheme);

    saveAction?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.RED_GREEN,
    toggleTheme,
  };
};

export default useTheme;
