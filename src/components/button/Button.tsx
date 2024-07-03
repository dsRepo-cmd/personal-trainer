import { ReactNode } from "react";
import { Variant } from "../../lib/types";
import "./Button.css";
import { cn } from "../../lib/cn";

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
  const addClasses = [variant, className];

  return (
    <button
      disabled={disabled}
      className={cn(" self-start rounded-sm", addClasses)}
    >
      {children}
    </button>
  );
};

export default Button;
