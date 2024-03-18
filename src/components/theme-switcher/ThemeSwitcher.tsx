import { memo, useCallback } from "react";
import useTheme from "../../lib/useTheme";
import "./ThemeSwitcher.css";
import { IoMdSettings } from "react-icons/io";

const ThemeSwitcher = memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, toggleTheme } = useTheme();

  const onToggleHandler = useCallback(() => {
    toggleTheme(() => {});
  }, [toggleTheme]);

  return (
    <div className="theme_switcher">
      <button className="  text-[#ffffff]" onClick={onToggleHandler}>
        <IoMdSettings />
      </button>
    </div>
  );
});

export default ThemeSwitcher;
