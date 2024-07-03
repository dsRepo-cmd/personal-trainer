import { ReactNode } from "react";
import { Variant } from "../../lib/types";
import { cn } from "../../lib/cn";

export type TextAlign = "text-start" | "text-end" | "text-center";

interface TextProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  disabled?: boolean;
}

const variantClasses: { [key in Variant]: string } = {
  primary: " bg-primary hover:bg-secondary ",
  secondary: " bg-secondary hover:bg-primary ",
  dark: "",
  white: "",
};

const Button: React.FC<TextProps> = ({
  children,
  variant = "dark",
  className = "",
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        " self-start rounded-sm",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
