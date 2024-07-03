import { ReactNode } from "react";
import { Variant } from "../../lib/types";
import "./Text.css";
import { cn } from "../../lib/cn";

export type TextAlign = "text-start" | "text-end" | "text-center";
export type TextSize = "s" | "m" | "l" | "xl";
export type FontFamily = "font-primary" | "font-secondary";
export type TextColor =
  | "text-primary"
  | "text-secondary"
  | "text-white"
  | "text-dark";

interface TextProps {
  text?: string;
  title?: string;
  span?: string;
  className?: string;
  align?: TextAlign;
  variant?: Variant;
  size?: TextSize;
  bold?: boolean;
  uppercase?: boolean;
  children?: ReactNode;
  fontFamily?: FontFamily;
  color?: TextColor;
}

const Text: React.FC<TextProps> = ({
  children,
  text,
  title,
  span,
  className = "",
  align = "text-center",
  variant = "dark",
  color = "text-white",
  size,
  bold,
  uppercase,
  fontFamily,
}) => {
  const mods = { ["uppercase"]: uppercase, ["bold"]: bold };

  const classMap: { [key in Variant]: string } = {
    dark: " text-white",
    white: "text-dark",
    primary: "",
    secondary: "",
  };

  const mod = classMap[variant];
  const addClasses = [size, align, fontFamily, color, mod, className];
  return (
    <>
      {title && (
        <h2
          className={cn(
            "   title Montserrat",
            mods,

            addClasses
          )}
        >
          {title} {children}
        </h2>
      )}
      {span && (
        <span className={cn("span", mods, addClasses)}>
          {span}
          {children}
        </span>
      )}
      {text && (
        <p className={cn("text", mods, addClasses)}>
          {text}
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
