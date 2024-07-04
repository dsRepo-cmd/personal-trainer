import { memo, useCallback, useState } from "react";
import { MdCancel } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import useTheme from "../../lib/useTheme";
import Text from "../../components/text/Text";
import { Theme } from "../../lib/types";
import { cn } from "../../lib/cn";
import "./ThemeSwitcher.css";

const ThemeSwitcher = memo(() => {
  const [isOpen, setOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const onOpenSettings = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const onCloseSettings = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeTheme = useCallback(
    (theme: Theme) => {
      toggleTheme(theme);
    },
    [toggleTheme]
  );

  return (
    <div className="theme_switcher">
      <button
        id="theme menu"
        title="theme menu"
        className="text-[#ffffff] w-full h-full flex items-center justify-center"
        onClick={onOpenSettings}
      >
        <IoMdSettings />
      </button>

      <div className={cn("options-panel", isOpen && "options-panel-active")}>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className="flex items-center justify-between w-full">
                  <Text className=" text-xl" text="Skin Colors" />
                  <button title="close panel" onClick={onCloseSettings}>
                    <MdCancel />
                  </button>
                </div>
                <hr className="options_panel_divider my-3" />
              </td>
            </tr>
            <tr>
              <td>
                <ul className="color_suggestions" id="main-color">
                  <li
                    className="green-red"
                    onClick={() => onChangeTheme(Theme.RED_GREEN)}
                  >
                    <span></span>
                  </li>
                  <li
                    className="purple-yellow"
                    onClick={() => onChangeTheme(Theme.PURPLE_YELLOW)}
                  >
                    <span></span>
                  </li>
                  <li
                    className="blue-orange"
                    onClick={() => onChangeTheme(Theme.BLUE_ORANGE)}
                  >
                    <span></span>
                  </li>
                  <li
                    className="light-green-pink"
                    onClick={() => onChangeTheme(Theme.LIGHT_GREEN_PINK)}
                  >
                    <span></span>
                  </li>
                  <li
                    className="turquoise-orange"
                    onClick={() => onChangeTheme(Theme.TURQUOISE_ORANGE)}
                  >
                    <span></span>
                  </li>
                  <li
                    className="dark-blue-dark-red"
                    onClick={() => onChangeTheme(Theme.DARK_BLUE_DARK_RED)}
                  >
                    <span></span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ThemeSwitcher;
