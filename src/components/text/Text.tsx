import type { Variant } from "../../lib/types";
import { cn } from "../../lib/cn";

interface TextProps {
  text?: string;
  title?: string;
  span?: string;
  className?: string;
  variant?: Variant;
  children?: React.ReactNode;
}

const variantClasses: { [key in Variant]: string } = {
  dark: " text-white ",
  white: "text-dark ",
  primary: "",
  secondary: "text-white",
};

const Text: React.FC<TextProps> = ({
  children,
  text,
  title,
  span,
  className = "",
  variant = "dark",
}) => {
  const addClasses = [variantClasses[variant], className];
  return (
    <>
      {title && (
        <h2
          className={cn(
            " selection:text-white selection:bg-secondary title Montserrat",

            addClasses
          )}
        >
          {title} {children}
        </h2>
      )}
      {span && (
        <span
          className={cn(
            "selection:text-white selection:bg-secondary",
            addClasses
          )}
        >
          {span}
          {children}
        </span>
      )}
      {text && (
        <p
          className={cn(
            "selection:text-white selection:bg-secondary",
            addClasses
          )}
        >
          {text}
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
