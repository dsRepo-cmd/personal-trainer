import { ReactNode } from "react";
import { classNames } from "../../lib/classNames";
import { Variant } from "../../lib/types";
import "./Text.css";

export type TextAlign = "text-start" | "text-end" | "text-center";
export type TextSize = "s" | "m" | "l" | "xl";
export type FontFamily = "Montserrat" | "OpenSans";

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
}

const Text: React.FC<TextProps> = ({
  children,
  text,
  title,
  span,
  className = "",
  align = "text-center",
  variant = "dark",
  size,
  bold,
  uppercase,
  fontFamily,
}) => {
  const mods = { ["uppercase"]: uppercase, ["bold"]: bold };
  const addClasses = [variant, size, align, className, fontFamily];

  return (
    <>
      {title && (
        <h2 className={classNames(" title Montserrat", mods, addClasses)}>
          {title} {children}
        </h2>
      )}
      {span && (
        <span className={classNames("span", mods, addClasses)}>
          {span}
          {children}
        </span>
      )}
      {text && (
        <p className={classNames("text", mods, addClasses)}>
          {text}
          {children}
        </p>
      )}
    </>
  );
};

export default Text;
