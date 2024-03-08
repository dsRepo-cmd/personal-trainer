import { ReactNode } from "react";
import { classNames } from "../../lib/classNames";
import { Variant } from "../../lib/types";
import "./Button.css";

export type TextAlign = "text-start" | "text-end" | "text-center";

interface TextProps {
  className?: string;
  vaiant?: Variant;
  children?: ReactNode;
}

const Button: React.FC<TextProps> = ({ children, vaiant, className = "" }) => {
  const mods = {};
  const addClasses = [vaiant, className];

  return (
    <button className={classNames("button", mods, addClasses)}>
      {children}
    </button>
  );
};

export default Button;
