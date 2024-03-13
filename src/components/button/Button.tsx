import { ReactNode } from "react";
import { classNames } from "../../lib/classNames";
import { Variant } from "../../lib/types";
import "./Button.css";

export type TextAlign = "text-start" | "text-end" | "text-center";

interface TextProps {
  className?: string;
  variant?: Variant;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: React.FC<TextProps> = ({
  children,
  variant,
  className = "",
  disabled,
}) => {
  const mods = {};
  const addClasses = [variant, className];
  console.log(addClasses);

  return (
    <button
      disabled={disabled}
      className={classNames("button", mods, addClasses)}
    >
      {children}
    </button>
  );
};

export default Button;
