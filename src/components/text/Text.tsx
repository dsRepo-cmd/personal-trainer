import { classNames } from "../../lib/classNames";
import { Variant } from "../../lib/types";
import "./Text.css";

export type TextAlign = "text-left" | "text-right" | "text-center";
export type TextSize = "s" | "m" | "l" | "xl";

interface TextProps {
  text?: string;
  title?: string;
  className?: string;
  align?: TextAlign;
  variant?: Variant;
  size?: TextSize;
  bold?: boolean;
  uppercase?: boolean;
}

const Text: React.FC<TextProps> = ({
  text,
  title,
  className = "",
  align = "text-center",
  variant = "dark",
  size,
  bold,
  uppercase,
}) => {
  const mods = { ["uppercase"]: uppercase, ["bold"]: bold };
  const addClasses = [variant, size, className];

  return (
    <div className={`flex ${align}`}>
      {title && (
        <h2 className={classNames("title", mods, addClasses)}>{title}</h2>
      )}

      {text && <p className={classNames("text", mods, addClasses)}>{text}</p>}
    </div>
  );
};

export default Text;
