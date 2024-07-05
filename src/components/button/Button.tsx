import { cn } from "../../lib/cn";
import type { Variant } from "../../lib/types";

export type TextAlign = "text-start" | "text-end" | "text-center";

interface TextProps {
  children: React.ReactNode;
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

const Button = ({
  children,
  variant = "dark",
  className = "",
  disabled,
}: TextProps) => {
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
