import { ReactNode, useEffect, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "./localStorage";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./enums";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  const [isThemeInited, setThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.RED_GREEN
  );

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
